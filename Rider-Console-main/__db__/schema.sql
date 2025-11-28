-- MySQL Schema for System Tables

-- Table: administrator
CREATE TABLE `administrator` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    `full_name` varchar(100) NOT NULL,
    `role` enum(
        'superadmin',
        'business_manager',
        'editor'
    ) DEFAULT 'business_manager',
    `status` tinyint(1) NOT NULL DEFAULT '1',
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `business_id` int NOT NULL DEFAULT '1',
    PRIMARY KEY (`id`),
    KEY `business_id` (`business_id`),
    CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: attachments
CREATE TABLE `attachments` (
    `attachment_id` int NOT NULL AUTO_INCREMENT,
    `associated_id` int NOT NULL,
    `associated_type` enum('rider', 'vehicle') NOT NULL,
    `file_representation` varchar(50) NOT NULL,
    `file_name` varchar(255) NOT NULL,
    `file_path` varchar(255) NOT NULL,
    `file_description` varchar(255) DEFAULT NULL,
    `uploaded_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`attachment_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: businesses
CREATE TABLE `businesses` (
    `business_id` int NOT NULL AUTO_INCREMENT,
    `business_name` varchar(255) NOT NULL,
    `business_type` varchar(100) DEFAULT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: collections
CREATE TABLE `collections` (
    `collection_id` int NOT NULL AUTO_INCREMENT,
    `admin_id` int NOT NULL,
    `amount` decimal(10, 2) NOT NULL,
    `collection_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `transaction_note` text,
    `target_phone` varchar(15) NOT NULL,
    `transaction_taken_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `business_id` int NOT NULL DEFAULT '1',
    PRIMARY KEY (`collection_id`),
    KEY `admin_id` (`admin_id`),
    KEY `business_id` (`business_id`),
    CONSTRAINT `collections_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `administrator` (`id`),
    CONSTRAINT `collections_ibfk_2` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: expenses
CREATE TABLE `expenses` (
    `expense_id` int NOT NULL AUTO_INCREMENT,
    `amount` decimal(10, 2) NOT NULL,
    `reason` varchar(255) NOT NULL,
    `incurred_by` varchar(100) DEFAULT NULL,
    `expense_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `file_name` varchar(255) DEFAULT NULL,
    `file_path` varchar(255) DEFAULT NULL,
    `business_id` int NOT NULL DEFAULT '1',
    PRIMARY KEY (`expense_id`),
    KEY `business_id` (`business_id`),
    CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: payments
CREATE TABLE `payments` (
    `payment_id` int NOT NULL AUTO_INCREMENT,
    `payment_type` enum('onboarding', 'daily') DEFAULT 'daily',
    `rental_id` int NOT NULL,
    `payment_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `amount_paid` decimal(10, 2) NOT NULL,
    `payment_method` varchar(255) NOT NULL DEFAULT 'cash',
    `payment_status` enum(
        'pending',
        'completed',
        'failed'
    ) DEFAULT 'completed',
    `reference` varchar(255) NOT NULL DEFAULT '',
    `payment_note` varchar(255) DEFAULT '',
    PRIMARY KEY (`payment_id`),
    KEY `rental_id` (`rental_id`),
    CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`rental_id`) REFERENCES `rental_agreements` (`rental_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: rental_agreements
CREATE TABLE `rental_agreements` (
    `rental_id` int NOT NULL AUTO_INCREMENT,
    `rider_id` int NOT NULL,
    `rental_start_date` datetime NOT NULL,
    `rental_end_date` datetime DEFAULT NULL,
    `total_amount_due` decimal(10, 2) DEFAULT '0.00',
    `status` enum('active', 'completed') DEFAULT 'active',
    `business_id` int NOT NULL DEFAULT '1',
    `vehicle_id` int DEFAULT NULL,
    PRIMARY KEY (`rental_id`),
    KEY `rider_id` (`rider_id`),
    KEY `vehicle_id` (`vehicle_id`),
    KEY `business_id` (`business_id`),
    CONSTRAINT `rental_agreements_ibfk_1` FOREIGN KEY (`rider_id`) REFERENCES `riders` (`rider_id`),
    CONSTRAINT `rental_agreements_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`),
    CONSTRAINT `rental_agreements_ibfk_3` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: riders
CREATE TABLE `riders` (
    `rider_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `phone` varchar(15) NOT NULL,
    `email` varchar(255) DEFAULT '',
    `address` varchar(255) DEFAULT NULL,
    `driver_license_no` varchar(50) NOT NULL,
    `registration_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `business_id` int NOT NULL DEFAULT '1',
    PRIMARY KEY (`rider_id`),
    UNIQUE KEY `phone` (`phone`),
    UNIQUE KEY `driver_license_no` (`driver_license_no`),
    KEY `business_id` (`business_id`),
    CONSTRAINT `riders_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Table: vehicles
CREATE TABLE `vehicles` (
    `vehicle_id` int NOT NULL AUTO_INCREMENT,
    `business_id` int NOT NULL DEFAULT '1',
    `registration_no` varchar(50) NOT NULL,
    `vehicle_type` varchar(50) DEFAULT NULL,
    `model` varchar(100) DEFAULT NULL,
    `status` enum(
        'available',
        'rented',
        'under maintenance'
    ) DEFAULT 'available',
    `daily_rental_fee` decimal(10, 2) DEFAULT NULL,
    PRIMARY KEY (`vehicle_id`),
    UNIQUE KEY `registration_no` (`registration_no`),
    KEY `business_id` (`business_id`),
    CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `businesses` (`business_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;