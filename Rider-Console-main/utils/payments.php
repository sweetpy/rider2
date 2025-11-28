<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require_once $ROOT_DIR . '/engine/db.php';
require_once $ROOT_DIR . '/utils/rentals.php';

class Payments
{

    public static function fetchPayment($payment_id, $business_id)
    {
        global $db;
        $query = "SELECT p.* 
        FROM payments p
        JOIN rental_agreements ra ON p.rental_id = ra.rental_id
        WHERE p.payment_id = ? AND ra.business_id = ?";
        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $payment_id, $business_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    /**
     * The function fetches all payments along with related rider and vehicle information from the
     * database and orders them by payment date in descending order.
     * 
     * @return bool|mysqli_result `fetchAllPayments` function returns a list of payments along with related
     * information such as rider details, vehicle details, rental dates, payment details, and payment
     * status. The query fetches data from the `rental_agreements`, `riders`, `vehicles`, and
     * `payments` tables, joining them based on specific relationships. The payments are ordered by the
     * payment date in descending order.
     */
    public static function fetchAllPayments($business_id)
    {
        global $db;
        $query = "SELECT 
            ra.rental_id,
            r.rider_id,
            r.name AS rider_name, 
            r.phone AS rider_phone, 
            r.email AS rider_email,
            r.address AS rider_address,
            r.driver_license_no AS rider_license,
            v.registration_no AS vehicle_registration,
            ra.rental_start_date, 
            ra.rental_end_date, 
            ra.total_amount_due, 
            ra.status AS rental_status,
            p.payment_id, 
            p.payment_type, 
            p.payment_date, 
            p.amount_paid, 
            p.payment_method, 
            p.reference, 
            p.payment_note, 
            p.payment_status
        FROM rental_agreements ra
        JOIN riders r ON ra.rider_id = r.rider_id
        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
        JOIN payments p ON ra.rental_id = p.rental_id
        WHERE ra.business_id = ?
        ORDER BY p.payment_id DESC";
        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        return $stmt->get_result();
    }


    /**
     * The function fetches information about riders' payments including total amounts due, paid fees,
     * remaining fees, and daily rental fees.
     * 
     * @return bool|mysqli_result  function `fetchRidersPayments` is returning a result set of data related to riders'
     * payments. The query fetches information such as rider ID, name, phone number, total amount due,
     * total paid onboarding fees, total paid daily rental fees, total expected daily rental fees,
     * total paid all fees, total remaining rental fees, remaining daily payment, daily payment amount,
     * days elapsed, and
     */
    public static function fetchRidersPayments($business_id)
    {
        global $db;
        $query = "SELECT 
            r.rider_id,
            r.name AS rider_name,
            r.phone AS rider_phone,
            ra.total_amount_due,
            SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'onboarding' THEN p.amount_paid ELSE 0 END) AS total_paid_onboarding_fees,
            SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'daily' THEN p.amount_paid ELSE 0 END) AS total_paid_daily_rental_fees,
            TIMESTAMPDIFF(DAY, ra.rental_start_date, 
                CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) * v.daily_rental_fee AS total_expected_daily_rental_fees,
            SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type IN ('onboarding', 'daily') THEN p.amount_paid ELSE 0 END) AS total_paid_all_fees,
            SUM(CASE WHEN p.payment_status = 'completed' THEN p.amount_paid ELSE 0 END) - 
            TIMESTAMPDIFF(DAY, ra.rental_start_date, 
                CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) * v.daily_rental_fee AS total_remaining_rental_fees,
            TIMESTAMPDIFF(DAY, ra.rental_start_date, 
                CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) * v.daily_rental_fee - 
            SUM(CASE WHEN p.payment_status = 'completed' AND p.payment_type = 'daily' THEN p.amount_paid ELSE 0 END) AS remaining_daily_payment,
            v.daily_rental_fee AS daily_payment_amount,
            TIMESTAMPDIFF(DAY, ra.rental_start_date, 
                CASE WHEN ra.status = 'active' THEN NOW() ELSE ra.rental_end_date END) AS days_elapsed
        FROM riders r
        JOIN rental_agreements ra ON r.rider_id = ra.rider_id
        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
        LEFT JOIN payments p ON ra.rental_id = p.rental_id
        WHERE ra.business_id = ?
        GROUP BY r.rider_id, r.name, r.phone, ra.total_amount_due, v.daily_rental_fee, ra.rental_start_date, ra.rental_end_date, ra.status
        ORDER BY r.name;";

        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        return $stmt->get_result();
    }


    public static function fetchRiderPaymentDetails($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
            DATE(p.payment_date) AS payment_date,
            GROUP_CONCAT(DISTINCT p.payment_id) AS payment_ids,
            p.payment_type,
            ra.rental_id,
            SUM(p.amount_paid) AS total_amount_paid,
            CASE 
                WHEN p.payment_type = 'daily' THEN (v.daily_rental_fee - SUM(p.amount_paid))
                ELSE NULL
            END AS balance_due,
            GROUP_CONCAT(DISTINCT p.reference) AS payment_references,
            GROUP_CONCAT(DISTINCT p.payment_note SEPARATOR ', ') AS payment_notes
        FROM rental_agreements ra
        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
        LEFT JOIN payments p ON ra.rental_id = p.rental_id 
        WHERE ra.rider_id = ? AND ra.business_id = ?
        GROUP BY DATE(p.payment_date), p.payment_type, ra.rental_id, v.daily_rental_fee
        ORDER BY payment_date";

        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }



    public static function fetchRiderTotalDailyPaid($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
                SUM(p.amount_paid) AS total_daily_paid
            FROM rental_agreements ra
            JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
            LEFT JOIN payments p ON ra.rental_id = p.rental_id AND p.payment_type = 'daily'
            WHERE ra.rider_id = ? AND ra.status = 'active' AND ra.business_id = ?;";

        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        return $result['total_daily_paid'] ?? null;
    }


    public static function fetchRiderTotalOnboarding($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
            SUM(p.amount_paid) AS total_onboarding
        FROM rental_agreements ra
        LEFT JOIN payments p ON ra.rental_id = p.rental_id AND p.payment_type = 'onboarding'
        WHERE ra.rider_id = ? AND ra.status = 'active' AND ra.business_id = ?;";

        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        return $result['total_onboarding'] ?? null;
    }



    public static function fetchRentalTotalOnboarding($rental_id, $business_id)
    {
        global $db;
        $query = "SELECT SUM(amount_paid) AS total_onboarding
        FROM payments 
        WHERE rental_id = ? AND payment_type = 'onboarding' AND payment_status = 'completed'
        AND rental_id IN (SELECT rental_id FROM rental_agreements WHERE business_id = ?);";

        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rental_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();

        return $result['total_onboarding'] ?? null;
    }


    public static function fetchRiderBalanceDue($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
            (SUM(v.daily_rental_fee) - IFNULL(SUM(p.amount_paid), 0)) AS balance_due
        FROM rental_agreements ra
        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
        LEFT JOIN payments p ON ra.rental_id = p.rental_id AND p.payment_type = 'daily'
        WHERE ra.rider_id = ? AND ra.status = 'active' AND ra.business_id = ?;";

        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        return $result['balance_due'] ?? null;
    }



    public static function fetchRiderRentalAgreementAmount($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT total_amount_due
        FROM rental_agreements
        WHERE rider_id = ? AND status = 'active' AND business_id = ?;";

        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        return $result['total_amount_due'] ?? null;
    }


    public static function calculateRiderRemainingOnRental($rider_id, $business_id)
    {
        $total_daily_paid = self::fetchRiderTotalDailyPaid($rider_id, $business_id);
        $total_onboarding = self::fetchRiderTotalOnboarding($rider_id, $business_id);
        $rental_agreement_amount = self::fetchRiderRentalAgreementAmount($rider_id, $business_id);

        if ($rental_agreement_amount !== null) {
            return $rental_agreement_amount - ($total_daily_paid + $total_onboarding);
        }

        return null;
    }



    public static function getWeeklyPaymentDetailsDaily($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
            CONCAT(
                DATE_FORMAT(DATE_ADD(MIN(DATE(p.payment_date)), INTERVAL -WEEKDAY(MIN(p.payment_date)) DAY), '%d %b'),
                ' to ',
                DATE_FORMAT(DATE_ADD(MIN(DATE(p.payment_date)), INTERVAL (6 - WEEKDAY(MIN(p.payment_date))) DAY), '%d %b')
            ) AS week_range,
            SUM(p.amount_paid) AS total_weekly_paid,
            (MAX(v.daily_rental_fee) * 7) AS expected_weekly_income,
            ((MAX(v.daily_rental_fee) * 7) - SUM(p.amount_paid)) AS weekly_balance_due,
            p.payment_type
        FROM rental_agreements ra
        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
        LEFT JOIN payments p ON ra.rental_id = p.rental_id
        WHERE ra.rider_id = ? AND p.payment_type = 'daily' AND ra.business_id = ?
        GROUP BY YEAR(p.payment_date), WEEK(p.payment_date, 1), p.payment_type
        ORDER BY MIN(p.payment_date);";
        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public static function getWeeklyPaymentDetailsOnboarding($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
            CONCAT(
                DATE_FORMAT(DATE_ADD(MIN(DATE(p.payment_date)), INTERVAL -WEEKDAY(MIN(p.payment_date)) DAY), '%d %b'),
                ' to ',
                DATE_FORMAT(DATE_ADD(MIN(DATE(p.payment_date)), INTERVAL (6 - WEEKDAY(MIN(p.payment_date))) DAY), '%d %b')
            ) AS week_range,
            SUM(p.amount_paid) AS total_onboarding_paid,
            SUM(v.daily_rental_fee * 7) AS expected_onboarding_income,
            (SUM(v.daily_rental_fee * 7) - SUM(p.amount_paid)) AS onboarding_balance_due,
            p.payment_type
        FROM rental_agreements ra
        JOIN vehicles v ON ra.vehicle_id = v.vehicle_id
        LEFT JOIN payments p ON ra.rental_id = p.rental_id
        WHERE ra.rider_id = ? AND p.payment_type = 'onboarding' AND ra.business_id = ?
        GROUP BY YEAR(p.payment_date), WEEK(p.payment_date, 1), p.payment_type
        ORDER BY MIN(p.payment_date);";
        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public static function getTotalAmounts($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT 
                SUM(CASE WHEN p.payment_type = 'daily' THEN p.amount_paid ELSE 0 END) AS total_weekly_paid,
                SUM(CASE WHEN p.payment_type = 'onboarding' THEN p.amount_paid ELSE 0 END) AS total_onboarding
            FROM rental_agreements ra
            LEFT JOIN payments p ON ra.rental_id = p.rental_id
            WHERE ra.rider_id = ? AND ra.status = 'active' AND ra.business_id = ?;
        ";
        $stmt = $db->prepare($query);
        $stmt->bind_param('ii', $rider_id, $business_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }


    public static function getFullPaymentRecord($rider_id = NULL, $payment_list = "paid", $business_id = NULL)
    {
        global $db;

        $query = "
        WITH RECURSIVE date_series AS (
            SELECT 
                ra.rental_id,
                ra.rental_start_date AS payment_date,
                ra.rental_end_date
            FROM rental_agreements ra
            WHERE ra.business_id = " . intval($business_id) . "
            UNION ALL
            SELECT 
                rental_id,
                DATE_ADD(payment_date, INTERVAL 1 DAY),
                rental_end_date
            FROM date_series
            WHERE payment_date < LEAST(CURRENT_DATE(), rental_end_date)
        )
        SELECT 
            ds.payment_date,
            ra.rental_id,
            ra.rider_id,
            ra.vehicle_id,
            ra.rental_start_date,
            ra.rental_end_date,
            ra.total_amount_due,
            ra.status AS rental_status,
            p.payment_id,
            COALESCE(p.amount_paid, 0) AS amount_paid,
            p.payment_method,
            p.payment_status,
            v.registration_no,
            v.daily_rental_fee,
            SUM(CASE 
                    WHEN p.payment_id IS NULL OR p.amount_paid IS NULL THEN v.daily_rental_fee 
                    ELSE 0 
                END) OVER (PARTITION BY ra.rental_id ORDER BY ds.payment_date) AS cumulative_due_amount
        FROM date_series ds
        LEFT JOIN payments p 
            ON ds.rental_id = p.rental_id AND DATE(p.payment_date) = DATE(ds.payment_date)
        JOIN rental_agreements ra 
            ON ds.rental_id = ra.rental_id
        JOIN vehicles v
            ON ra.vehicle_id = v.vehicle_id";

        $conditions = [];

        if (!is_null($rider_id)) {
            $conditions[] = "ra.rider_id = " . intval($rider_id);
        }

        if ($payment_list === "paid") {
            $conditions[] = "p.payment_status = 'completed'";
        } elseif ($payment_list === "due") {
            $conditions[] = "p.amount_paid IS NULL";
        }

        if (!empty($conditions)) {
            $query .= " WHERE " . implode(" AND ", $conditions);
        }

        $query .= " ORDER BY ds.rental_id, ds.payment_date LIMIT 100;";

        $payments = $db->query($query);
        if (!$payments)
            return false;

        $results = [];
        while ($row = $payments->fetch_assoc()) {
            $results[] = $row;
        }

        return $results;
    }


    public static function getPreviousNonPaidDates($rider_id = null, $order = 'ASC', $business_id = null)
    {
        global $db;

        $query = "
        WITH RECURSIVE date_series AS (
            SELECT 
                ra.rental_id,
                ra.rental_start_date AS payment_date,
                ra.rental_end_date
            FROM rental_agreements ra
            WHERE ra.business_id = " . intval($business_id) . "
            UNION ALL
            SELECT 
                rental_id,
                DATE_ADD(payment_date, INTERVAL 1 DAY),
                rental_end_date
            FROM date_series
            WHERE payment_date < LEAST(CURRENT_DATE(), rental_end_date)
        )
        SELECT 
            DATE(ds.payment_date) AS payment_date,
            v.daily_rental_fee,
            COALESCE(p.amount_paid, 0) AS amount_paid,
            p.payment_id,
            p.rental_id,
            GREATEST(v.daily_rental_fee - COALESCE(p.amount_paid, 0), 0) AS reminder
        FROM date_series ds
        LEFT JOIN payments p 
            ON ds.rental_id = p.rental_id 
            AND DATE(p.payment_date) = DATE(ds.payment_date)
            AND p.payment_type = 'daily'
        JOIN rental_agreements ra 
            ON ds.rental_id = ra.rental_id
        JOIN vehicles v
            ON ra.vehicle_id = v.vehicle_id
        WHERE COALESCE(p.amount_paid, 0) < v.daily_rental_fee";

        if (!is_null($rider_id)) {
            $query .= " AND ra.rider_id = " . intval($rider_id);
        }

        $query .= " ORDER BY ds.payment_date " . ($order === 'DESC' ? "DESC" : "ASC");

        $result = $db->query($query);
        if (!$result)
            return false;

        $non_paid_dates = [];
        while ($row = $result->fetch_assoc()) {
            if ($row['reminder'] > 0) {
                $non_paid_dates[] = [
                    'payment_date' => $row['payment_date'],
                    'daily_rental_fee' => $row['daily_rental_fee'],
                    'amount_paid' => $row['amount_paid'] ?? 0,
                    'reminder' => $row['reminder'],
                    'payment_id' => $row['payment_id'] ?? 0,
                    'rental_id' => $row['rental_id'] ?? 0
                ];
            }
        }

        return $non_paid_dates;
    }


    public static function createPayment($rental_id, $payment_date, $amount_paid, $payment_method, $payment_status, $reference, $payment_type, $business_id, $payment_note = '')
    {
        global $db;

        // Check if payment with the same reference exists
        $stmt = $db->prepare("SELECT payment_id FROM payments WHERE reference = ?");
        $stmt->bind_param("s", $reference);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            return 'Error: Payment with the same reference already exists.';
        }

        // Validate required fields
        if (empty($rental_id) || empty($amount_paid)) {
            return 'Please fill in all required fields.';
        }

        // Insert payment
        $stmt = $db->prepare("
            INSERT INTO payments (
                rental_id, payment_date, amount_paid, payment_method, 
                payment_status, reference, payment_type, payment_note
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

        if ($stmt === false) {
            return 'Prepare failed: ' . htmlspecialchars($db->error);
        }

        $stmt->bind_param("isssssss", $rental_id, $payment_date, $amount_paid, $payment_method, $payment_status, $reference, $payment_type, $payment_note);

        if ($stmt->execute()) {
            return 'Payment added successfully.';
        } else {
            return 'Error adding payment: ' . htmlspecialchars($stmt->error);
        }
    }



    public static function updatePaymentAmount($payment_id, $rental_id, $new_amount, $payment_note)
    {
        global $db;
        $query = "UPDATE payments SET amount_paid = ?, payment_note = ? WHERE payment_id = ? AND rental_id = ?";
        $stmt = $db->prepare($query);
        $stmt->bind_param('dssi', $new_amount, $payment_note, $payment_id, $rental_id);
        return $stmt->execute();
    }


    public static function movePaymentAmount(
        $payment_id,
        $rental_id,
        $amount_to_move,
        $payment_date,
        $target_payment_date,
        $reference,
        $payment_type,
        $business_id,
        $payment_note = ''
    ) {
        global $db;

        $parent_payment = self::fetchPayment($payment_id, $business_id);
        if (!$parent_payment) {
            return 'Error: Payment record not found.';
        }

        $parent_amount = $parent_payment['amount_paid'];
        $new_amount = $parent_amount - $amount_to_move;
        if ($new_amount < 0) {
            return 'Error: Amount to move exceeds the original payment amount.';
        }

        $payment_note .= " $amount_to_move to $target_payment_date.";

        $original_payment = self::updatePaymentAmount(
            $payment_id,
            $rental_id,
            $new_amount,
            "Moved " . $payment_note
        );

        if (!$original_payment) {
            return 'Error: Failed to update the original payment.';
        }

        $create_result = self::createPayment(
            $rental_id,
            $target_payment_date,
            $amount_to_move,
            'mobile',
            'completed',
            $reference,
            $payment_type,
            $business_id,
            "Received " . $payment_note
        );

        if (strpos($create_result, 'Error') !== false) {
            return $create_result;
        }

        return 'Amount successfully moved and new payment record created on the target date.';
    }


    public static function updatePaymentDate($payment_id, $new_payment_date, $original_payment_date)
    {
        global $db;
        $note = "Transaction moved from $original_payment_date to $new_payment_date.";
        $query = "UPDATE payments SET payment_date = ?, payment_note = CONCAT(IFNULL(payment_note, ''), ' ', ?) WHERE payment_id = ?";
        $stmt = $db->prepare($query);
        $stmt->bind_param('ssi', $new_payment_date, $note, $payment_id);
        return $stmt->execute();
    }

}