<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require_once $ROOT_DIR . '/engine/db.php';

class Overview
{
    private static function getWeeklyGrowth($current, $previous)
    {
        if ($previous == 0)
            return null;
        return round((($current - $previous) / $previous) * 100, 2);
    }

    public static function totalBusinesses()
    {
        global $db;
        $result = $db->query("SELECT COUNT(*) AS total FROM businesses");
        return $result ? intval($result->fetch_assoc()['total']) : 0;
    }

    public static function totalActiveRiders()
    {
        global $db;
        $result = $db->query("SELECT COUNT(DISTINCT rider_id) AS total FROM rental_agreements WHERE status = 'active'");
        return $result ? intval($result->fetch_assoc()['total']) : 0;
    }

    public static function totalActiveVehicles()
    {
        global $db;
        $result = $db->query("SELECT COUNT(*) AS total FROM vehicles WHERE status = 'rented'");
        return $result ? intval($result->fetch_assoc()['total']) : 0;
    }

    public static function totalRentals()
    {
        global $db;
        $result = $db->query("SELECT COUNT(*) AS total FROM rental_agreements");
        return $result ? intval($result->fetch_assoc()['total']) : 0;
    }

    public static function vehicleStatusRatio()
    {
        global $db;
        $query = "SELECT 
                    SUM(CASE WHEN status = 'rented' THEN 1 ELSE 0 END) AS rented,
                    COUNT(*) AS total
                  FROM vehicles";
        $result = $db->query($query);
        $row = $result->fetch_assoc();
        $rented = intval($row['rented']);
        $total = intval($row['total']);
        $percentage = $total > 0 ? round(($rented / $total) * 100, 2) : 0;

        return [
            'rented' => $rented,
            'total' => $total,
            'percentage_rented' => $percentage
        ];
    }

    public static function riderStatusRatio()
    {
        global $db;
        $query = "SELECT 
                    (SELECT COUNT(DISTINCT rider_id) FROM rental_agreements WHERE status = 'active') AS active,
                    (SELECT COUNT(*) FROM riders) AS total";
        $result = $db->query($query);
        $row = $result->fetch_assoc();
        $active = intval($row['active']);
        $total = intval($row['total']);
        $percentage = $total > 0 ? round(($active / $total) * 100, 2) : 0;

        return [
            'active' => $active,
            'total' => $total,
            'percentage_active' => $percentage
        ];
    }

    public static function rentalStatusRatio()
    {
        global $db;
        $query = "SELECT 
                    SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) AS active,
                    COUNT(*) AS total
                  FROM rental_agreements";
        $result = $db->query($query);
        $row = $result->fetch_assoc();
        $active = intval($row['active']);
        $total = intval($row['total']);
        $percentage = $total > 0 ? round(($active / $total) * 100, 2) : 0;

        return [
            'active' => $active,
            'total' => $total,
            'percentage_active' => $percentage
        ];
    }

    public static function totalRevenue($start = null, $end = null)
    {
        global $db;
        $query = "SELECT SUM(amount_paid) AS total FROM payments WHERE payment_status = 'completed'";
        if ($start && $end) {
            $query .= " AND payment_date BETWEEN '$start' AND '$end'";
        }
        $result = $db->query($query);
        return $result ? floatval($result->fetch_assoc()['total']) : 0.0;
    }

    public static function totalCollections($start = null, $end = null)
    {
        global $db;
        $query = "SELECT SUM(amount) AS total FROM collections";
        if ($start && $end) {
            $query .= " WHERE collection_date BETWEEN '$start' AND '$end'";
        }
        $result = $db->query($query);
        return $result ? floatval($result->fetch_assoc()['total']) : 0.0;
    }

    public static function totalExpenses($start = null, $end = null)
    {
        global $db;
        $query = "SELECT SUM(amount) AS total FROM expenses";
        if ($start && $end) {
            $query .= " WHERE expense_date BETWEEN '$start' AND '$end'";
        }
        $result = $db->query($query);
        return $result ? floatval($result->fetch_assoc()['total']) : 0.0;
    }

    public static function netProfit($start = null, $end = null)
    {
        return self::totalRevenue($start, $end) - self::totalExpenses($start, $end);
    }

    public static function revenueTrend()
    {
        global $db;
        $query = "SELECT DATE(payment_date) AS date, SUM(amount_paid) AS total
                  FROM payments
                  WHERE payment_status = 'completed'
                  GROUP BY DATE(payment_date)
                  ORDER BY date";
        $result = $db->query($query);
        return $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    }

    public static function revenueTrendByBusiness($business_id)
    {
        global $db;
        $query = "SELECT DATE(p.payment_date) AS date, SUM(p.amount_paid) AS total
                  FROM payments p
                  JOIN rental_agreements ra ON p.rental_id = ra.rental_id
                  WHERE p.payment_status = 'completed' AND ra.business_id = ?
                  GROUP BY DATE(p.payment_date)
                  ORDER BY date";
        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    }

    public static function revenueTrendCombined()
    {
        global $db;
        $general = self::revenueTrend();

        $businesses = [];
        $result = $db->query("SELECT business_id, business_name FROM businesses");
        while ($row = $result->fetch_assoc()) {
            $row['revenue_trend'] = self::revenueTrendByBusiness($row['business_id']);
            $businesses[] = $row;
        }

        return [
            'general' => $general,
            'businesses' => $businesses
        ];
    }

    public static function getBusinessStats()
    {
        global $db;
        $query = "
            SELECT b.business_id, b.business_name,
                   COALESCE(SUM(p.amount_paid), 0) AS total_revenue,
                   COUNT(DISTINCT ra.rental_id) AS rental_count,
                   COALESCE(SUM(e.amount), 0) AS total_expenses,
                   (SELECT COUNT(DISTINCT ra2.rider_id)
                    FROM rental_agreements ra2
                    WHERE ra2.business_id = b.business_id AND ra2.status = 'active') AS active_drivers
            FROM businesses b
            LEFT JOIN rental_agreements ra ON ra.business_id = b.business_id
            LEFT JOIN payments p ON p.rental_id = ra.rental_id AND p.payment_status = 'completed'
            LEFT JOIN expenses e ON e.business_id = b.business_id
            GROUP BY b.business_id
            ORDER BY b.business_name
        ";
        $result = $db->query($query);
        return $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    }

    public static function getAll()
    {
        $today = date('Y-m-d');
        $startThisWeek = date('Y-m-d', strtotime('monday this week'));
        $endThisWeek = date('Y-m-d', strtotime('sunday this week'));
        $startLastWeek = date('Y-m-d', strtotime('monday last week'));
        $endLastWeek = date('Y-m-d', strtotime('sunday last week'));

        $revenueNow = self::totalRevenue($startThisWeek, $endThisWeek);
        $revenueLast = self::totalRevenue($startLastWeek, $endLastWeek);

        $collectionsNow = self::totalCollections($startThisWeek, $endThisWeek);
        $collectionsLast = self::totalCollections($startLastWeek, $endLastWeek);

        $expensesNow = self::totalExpenses($startThisWeek, $endThisWeek);
        $expensesLast = self::totalExpenses($startLastWeek, $endLastWeek);

        $profitNow = self::netProfit($startThisWeek, $endThisWeek);
        $profitLast = self::netProfit($startLastWeek, $endLastWeek);

        $businessStats = self::getBusinessStats();

        return [
            'total_businesses' => self::totalBusinesses(),
            'total_active_riders' => self::totalActiveRiders(),
            'total_active_vehicles' => self::totalActiveVehicles(),
            'total_rentals' => self::totalRentals(),
            'vehicle_status_ratio' => self::vehicleStatusRatio(),
            'rider_status_ratio' => self::riderStatusRatio(),
            'rental_status_ratio' => self::rentalStatusRatio(),
            'total_revenue' => self::totalRevenue(),
            'total_collections' => self::totalCollections(),
            'total_expenses' => self::totalExpenses(),
            'net_profit' => self::netProfit(),
            'growth' => [
                'revenue_growth' => self::getWeeklyGrowth($revenueNow, $revenueLast),
                'collections_growth' => self::getWeeklyGrowth($collectionsNow, $collectionsLast),
                'expenses_growth' => self::getWeeklyGrowth($expensesNow, $expensesLast),
                'net_profit_growth' => self::getWeeklyGrowth($profitNow, $profitLast),
            ],
            'revenue_trend' => self::revenueTrend(),
            'revenue_trend_combined' => self::revenueTrendCombined(),
            'business_stats' => $businessStats
        ];
    }
}
