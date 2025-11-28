<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require_once $ROOT_DIR . '/engine/db.php';

class Collections
{
    public static function createCollection($admin_id, $amount, $transaction_note, $target_phone, $transaction_taken_at, $business_id)
    {
        global $db;

        $query = "INSERT INTO collections (admin_id, amount, transaction_note, target_phone, transaction_taken_at, business_id)
                  VALUES (?, ?, ?, ?, ?, ?)";

        $stmt = $db->prepare($query);
        $stmt->bind_param("idsssi", $admin_id, $amount, $transaction_note, $target_phone, $transaction_taken_at, $business_id);
        $result = $stmt->execute();

        return $result ? $db->insert_id : false;
    }

    public static function getCollectionDetails($collection_id, $business_id)
    {
        global $db;

        $query = "SELECT c.*, a.username AS admin_username
                  FROM collections c
                  JOIN administrator a ON a.id = c.admin_id
                  WHERE c.collection_id = ? AND c.business_id = ?";

        $stmt = $db->prepare($query);
        $stmt->bind_param("ii", $collection_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_assoc() ?: false;
    }

    public static function deleteCollection($collection_id, $business_id)
    {
        global $db;

        $query = "DELETE FROM collections WHERE collection_id = ? AND business_id = ?";

        $stmt = $db->prepare($query);
        $stmt->bind_param("ii", $collection_id, $business_id);
        return $stmt->execute();
    }

    public static function getTotalCollectedByAdmin($admin_id, $business_id)
    {
        global $db;

        $query = "SELECT SUM(amount) AS total_collected FROM collections WHERE admin_id = ? AND business_id = ?";

        $stmt = $db->prepare($query);
        $stmt->bind_param("ii", $admin_id, $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();

        return $result['total_collected'] ?? 0.00;
    }

    public static function getTotalCollectedByAllAdmins($business_id)
    {
        global $db;

        $query = "SELECT SUM(amount) AS total_collected FROM collections WHERE business_id = ?";

        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();

        return $result['total_collected'] ?? 0.00;
    }

    public static function fetchAllCollections($business_id)
    {
        global $db;

        $query = "SELECT c.*, a.username AS admin_username, a.full_name AS admin_full_name
                  FROM collections c
                  JOIN administrator a ON a.id = c.admin_id
                  WHERE c.business_id = ?
                  ORDER BY c.collection_date DESC";

        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $business_id);
        $stmt->execute();

        return $stmt->get_result();
    }
}
?>