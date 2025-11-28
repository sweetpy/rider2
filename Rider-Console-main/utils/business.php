<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
require_once $ROOT_DIR . '/engine/db.php';

class Business
{
    /**
     * Fetch all businesses.
     * @return array
     */
    public static function fetchAll()
    {
        global $db;
        $query = "SELECT * FROM businesses ORDER BY created_at DESC";
        $result = $db->query($query);
        return $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    }

    /**
     * Fetch a single business by ID.
     * @param int $business_id
     * @return array|null
     */
    public static function fetchById($business_id)
    {
        global $db;
        $stmt = $db->prepare("SELECT * FROM businesses WHERE business_id = ?");
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows ? $result->fetch_assoc() : null;
    }

    /**
     * Create a new business.
     * @param string $name
     * @param string|null $type
     * @return bool|string
     */
    public static function create($name, $type = null)
    {
        global $db;
        $stmt = $db->prepare("INSERT INTO businesses (business_name, business_type) VALUES (?, ?)");
        $stmt->bind_param("ss", $name, $type);
        if ($stmt->execute()) {
            return true;
        }
        return "Error: " . $stmt->error;
    }

    /**
     * Update an existing business.
     * @param int $business_id
     * @param string $name
     * @param string|null $type
     * @return bool|string
     */
    public static function update($business_id, $name, $type = null)
    {
        global $db;
        $stmt = $db->prepare("UPDATE businesses SET business_name = ?, business_type = ? WHERE business_id = ?");
        $stmt->bind_param("ssi", $name, $type, $business_id);
        if ($stmt->execute()) {
            return true;
        }
        return "Error: " . $stmt->error;
    }

    /**
     * Delete a business.
     * @param int $business_id
     * @return bool|string
     */
    public static function delete($business_id)
    {
        global $db;
        $stmt = $db->prepare("DELETE FROM businesses WHERE business_id = ?");
        $stmt->bind_param("i", $business_id);
        if ($stmt->execute()) {
            return true;
        }
        return "Error: " . $stmt->error;
    }

    /**
     * Count total businesses.
     * @return int
     */
    public static function countAll()
    {
        global $db;
        $result = $db->query("SELECT COUNT(*) AS total FROM businesses");
        $row = $result->fetch_assoc();
        return intval($row['total']);
    }

    /**
     * Fetch administrators assigned to a specific business.
     *
     * @param int $business_id
     * @return array
     */
    public static function fetchAdministrators($business_id)
    {
        global $db;
        $stmt = $db->prepare("
            SELECT 
                id, username, full_name, email, role, status, created_at 
            FROM administrator 
            WHERE business_id = ?
            ORDER BY created_at DESC
        ");
        $stmt->bind_param("i", $business_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result ? $result->fetch_all(MYSQLI_ASSOC) : [];
    }
}
