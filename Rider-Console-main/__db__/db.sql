-- 1. Create BUSINESSES table
CREATE TABLE IF NOT EXISTS `businesses` (
    `business_id` INT AUTO_INCREMENT PRIMARY KEY,
    `business_name` VARCHAR(255) NOT NULL,
    `business_type` VARCHAR(100),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Insert initial businesses
INSERT INTO `businesses`(`business_type`,`business_name`) VALUES('bike','Boda Volt');
INSERT INTO `businesses`(`business_type`,`business_name`) VALUES('car','Cars');

-- 3. Add business_id to existing tables with default as 1
ALTER TABLE administrator ADD COLUMN business_id INT NOT NULL DEFAULT 1;
ALTER TABLE collections ADD COLUMN business_id INT NOT NULL DEFAULT 1;
ALTER TABLE expenses ADD COLUMN business_id INT NOT NULL DEFAULT 1;
ALTER TABLE rental_agreements ADD COLUMN business_id INT NOT NULL DEFAULT 1;
ALTER TABLE riders ADD COLUMN business_id INT NOT NULL DEFAULT 1;

-- 4. Create VEHICLES table
CREATE TABLE IF NOT EXISTS `vehicles` (
    `vehicle_id` INT AUTO_INCREMENT PRIMARY KEY,
    `business_id` INT NOT NULL DEFAULT 1,
    `registration_no` VARCHAR(50) UNIQUE NOT NULL,
    `vehicle_type` VARCHAR(50),
    `model` VARCHAR(100),
    `status` ENUM('available','rented','under maintenance') DEFAULT 'available',
    `daily_rental_fee` DECIMAL(10,2),
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- 5. Migrate data from motorbikes to vehicles
INSERT INTO vehicles (registration_no, vehicle_type, model, status, daily_rental_fee, business_id)
SELECT registration_no, 'bike', model, status, daily_rental_fee, 1 FROM motorbikes;

-- 6. Update rental_agreements to use vehicle_id instead of bike_id
ALTER TABLE rental_agreements ADD COLUMN vehicle_id INT NULL;
UPDATE rental_agreements ra
JOIN motorbikes mb ON ra.bike_id = mb.bike_id
JOIN vehicles v ON mb.registration_no = v.registration_no
SET ra.vehicle_id = v.vehicle_id;

-- 7. Modify rental_agreements structure to remove bike_id
ALTER TABLE rental_agreements DROP FOREIGN KEY rental_agreements_ibfk_2;
ALTER TABLE rental_agreements DROP COLUMN bike_id;
ALTER TABLE rental_agreements ADD FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id);

-- 8. Update attachments to associate with new types
ALTER TABLE attachments MODIFY associated_type ENUM('rider','vehicle') NOT NULL;
UPDATE attachments SET associated_type = 'vehicle' WHERE associated_type = 'bike';

-- 9. Update administrator roles enum
ALTER TABLE administrator MODIFY role ENUM('superadmin','business_manager','editor') DEFAULT 'business_manager';

-- 10. Insert initial administrators
INSERT INTO `administrator`(`username`,`email`,`role`,`business_id`,`password`,`full_name`,`status`) 
VALUES('rider','rider@rider.tz','business_manager',1,'RiderVanguard','Volt Manager',1);

INSERT INTO `administrator`(`username`,`email`,`role`,`business_id`,`password`,`full_name`,`status`) 
VALUES('motor','motor@rider.tz','business_manager',2,'GearMarshal','Car Flow Manager',1);

-- 11. Add foreign key constraints for new columns
ALTER TABLE administrator ADD FOREIGN KEY (business_id) REFERENCES businesses(business_id);
ALTER TABLE collections ADD FOREIGN KEY (business_id) REFERENCES businesses(business_id);
ALTER TABLE expenses ADD FOREIGN KEY (business_id) REFERENCES businesses(business_id);
ALTER TABLE rental_agreements ADD FOREIGN KEY (business_id) REFERENCES businesses(business_id);
ALTER TABLE riders ADD FOREIGN KEY (business_id) REFERENCES businesses(business_id);

-- 12. Validate and commit changes
COMMIT;
