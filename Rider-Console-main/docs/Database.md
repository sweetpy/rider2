Database — Rider-Console

Schema location
- The canonical schema is `__db__/schema.sql`. There may also be a `db.sql` with seeds.

Importing the schema
1. Create a database (example name `ridertz_general`):

```sql
CREATE DATABASE ridertz_general CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Import the schema

```bash
mysql -u root -p ridertz_general < __db__/schema.sql
```

DB connection
- Edit `engine/db.php` to change credentials. Variables to update:
  - `$host` — database host
  - `$username` — database username
  - `$password` — password for the user
  - `$database` — database name

Create an initial admin user (recommended)
- Use PHP to generate a secure password hash and insert a row into `administrator`.

Example (run from PHP CLI):
```php
<?php
$pw = password_hash('ChangeMe123!', PASSWORD_DEFAULT);
echo $pw, PHP_EOL;
```

Then insert the admin into MySQL (replace the hashed password below):

```sql
INSERT INTO administrator (username, password, email, full_name, role, status, business_id)
VALUES ('superadmin', '<hashed_password_here>', 'admin@example.com', 'Super Admin', 'superadmin', 1, 1);
```

Notes about schema
- Primary entities: `administrator`, `businesses`, `riders`, `vehicles`, `rental_agreements`, `payments`, `expenses`, `collections`.
- `administrator.business_id` is a foreign key to `businesses.business_id`.
- Many tables include `business_id` for scoping multi-tenant data.

Backups and migrations
- There is no migration framework in the repo. For change tracking consider adding a migration tool (Phinx, Laravel migrations, or simple timestamped SQL files).
