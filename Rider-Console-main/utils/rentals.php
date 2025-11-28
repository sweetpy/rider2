<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require_once $ROOT_DIR . '/engine/db.php';

class Rentals
{
    // Fetch rental details for a specific rider
    public static function getRiderRentalDetails($rider_id)
    {
        global $db;

        // Sanitize input
        $rider_id = intval($rider_id);

        $query = "
            SELECT 
                DATE_FORMAT(ra.rental_start_date, '%M %e, %Y') AS rental_start_date, 
                ra.rental_end_date, 
                ra.total_amount_due, 
                ra.status AS rental_status,
                b.*
            FROM rental_agreements ra
            JOIN vehicles b ON b.vehicle_id = ra.vehicle_id
            WHERE ra.rider_id = $rider_id
        ";

        $rental = $db->query($query);
        $rental = $rental->fetch_assoc();

        return $rental??false;
    }

    // Fetch details for a specific rental agreement
    public static function getRentalDetails($rental_id)
    {
        global $db;

        // Sanitize input
        $rental_id = intval($rental_id);

        $query = "
            SELECT ra.*, b.*
            FROM rental_agreements ra
            JOIN vehicles b ON b.vehicle_id = ra.vehicle_id
            WHERE ra.rental_id = $rental_id
        ";

        $rental = $db->query($query);

        if (!$rental) {
            return false; // Return false if the query fails
        }

        // Fetch and return the rental as an associative array or false if not found
        return $rental->fetch_assoc() ?? false;
    }
}
