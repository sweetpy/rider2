<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require_once $ROOT_DIR . '/engine/db.php';

class Riders
{
    /**
     * Fetch all riders for the logged-in business, ordered by registration date.
     * 
     * @param int $business_id The business ID to filter riders.
     * @return array|false List of riders or false if no records found.
     */
    public static function fetchAllRiders($business_id)
    {
        global $db;
        $query = "SELECT rider_id, name, email, phone, address, driver_license_no, registration_date 
                  FROM riders WHERE business_id = ? 
                  ORDER BY registration_date DESC";

        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC) ?: false;
    }

    /**
     * Fetch a single rider by ID within a specific business.
     * 
     * @param int $rider_id The rider ID.
     * @param int $business_id The business ID to ensure correct access.
     * @return array|false Rider details or false if not found.
     */
    public static function fetchRider($rider_id, $business_id)
    {
        global $db;
        $query = "SELECT rider_id, name, email, phone, address, driver_license_no, registration_date 
                  FROM riders WHERE rider_id = ? AND business_id = ?";

        $stmt = $db->prepare($query);
        $stmt->bind_param("ii", $rider_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_assoc() ?: false;
    }
}
?>
