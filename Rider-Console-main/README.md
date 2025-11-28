# Rider-Console

Rider-Console is a lightweight server-rendered PHP web application for managing vehicle rentals, drivers (riders), payments, collections and business-level reporting. It ships with a small multi-tenant-friendly schema (business scoping via `business_id`) and two main web interfaces:

- `apex/` — administrative superadmin interface
- `console/` — business/manager-facing console for day-to-day operations

This repository is plain PHP (no framework) and uses MySQL (or MariaDB) via the `mysqli` extension.

## Quick summary

- Language: PHP
- DB: MySQL / MariaDB
- Frontend: Server-rendered PHP templates + assets in `assets/`
- No dependency manager required to run (Composer optional)

## Table of contents

- What this project does
- Requirements
- Quick start (local)
- Database (schema & admin user)
- Configuration
- Directory map (short)
- Authentication & sessions
- Security notes & recommended improvements
- Handoff checklist & next steps

## What this project does

Rider-Console manages vehicle rentals and related financial flows. Key features include:

- Admin user management
- Business scoping (multiple businesses) with separate riders, vehicles and rental agreements
- Rental agreements and payments (onboarding and daily payments)
- Collections and expenses tracking
- Dashboard and reporting pages for both superadmin (`apex/`) and business users (`console/`)

## Requirements

- PHP 7.4+ with `mysqli` enabled
- MySQL or MariaDB
- Web server (Apache, Nginx) or use PHP built-in server for development
- Optional: Git and a code editor (VS Code recommended)

## Quick start (development)

1. Clone the repo into your web server document root or a folder served by your web server.

2. Create the database and import the schema. From the project root run:

> ! IMPORTANT
>
> DATABASE SCHEMA AVAILABLE IN THIS REPO HAS UNDERGONE SEVERAL CHANGES IN PRODUCTION
> CHANCES ARE YOUR LOCAL-db WILL FAIL. `:(` 
> PLEASE SYNC WITH THE PRODUCTOIN DB SCHEMA BEFORE CONTINUING 

```bash
# create database (optional)
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS ridertz_general CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# import schema
mysql -u root -p ridertz_general < __db__/schema.sql
```

3. Update `engine/db.php` with DB credentials (host/user/password/database). For quick local testing you can keep defaults but do not use production credentials in this file.

4. Start a local PHP server (development):

```bash
php -S localhost:8000 -t .
```

5. Open http://localhost:8000 in your browser and sign in. Create an initial admin user (see Database section below).

## Database

- Schema file: `__db__/schema.sql` (canonical schema used by the app)
- There is no migration system in the repo — for schema evolution, use timestamped SQL files or adopt a migration tool.

Creating an initial admin user

1. Generate a secure hashed password with PHP:

```php
<?php
echo password_hash('ChangeMe123!', PASSWORD_DEFAULT) . PHP_EOL;
```

2. Insert a superadmin row (replace `<hashed_password>` and email):

```sql
INSERT INTO administrator (username, password, email, full_name, role, status, business_id)
VALUES ('superadmin', '<hashed_password>', 'admin@example.com', 'Super Admin', 'superadmin', 1, 1);
```

Notes
- Many tables include a `business_id` foreign key for scoping. When performing cross-business reporting or data changes be mindful of this field.

## Configuration

- Primary DB config: `engine/db.php` — contains `$host`, `$username`, `$password`, and `$database` variables along with `$CDN_URL`.
- Recommendation: move credentials to environment variables or a secure config file (e.g., `.env`) before production use.

## Directory reference (short)

- `index.php` — root sign-in page
- `apex/` — admin/superadmin pages
- `console/` — business console (manager) pages
- `engine/` — backend utilities (DB connection, auth handlers)
  - `engine/db.php` — DB connection
  - `engine/authentication.php` — login processing
- `includes/` — shared partials (head, sidebar, top-nav)
- `utils/` — small PHP helper modules containing business logic (business, riders, rentals, collections, etc.)
- `assets/` — CSS, JS, images and vendor assets
- `__db__/` — `schema.sql` and other DB artifacts
- `docs/` — onboarding and handoff docs (added)

## Authentication & sessions

- `engine/authentication.php` handles POST login requests and sets PHP session variables on success.
- The code attempts `password_verify()` against the stored `administrator.password` value and falls back to plaintext comparison if verification fails. This is insecure and must be fixed for production (see Security notes).

## Security notes & recommended improvements

The application is functional but has a few security issues to address before production:

1. Prepared statements: some code uses interpolated queries with `real_escape_string`; prefer prepared statements consistently to avoid SQL injection.
2. Password handling: remove any plaintext password fallback. Ensure all admin passwords are hashed using `password_hash()` and validated via `password_verify()` only.
3. Secrets: move DB credentials out of `engine/db.php` into environment variables or a config file not committed to source control.
4. Session hardening: ensure secure cookie flags in production (e.g., `session.cookie_secure`, `session.cookie_httponly`, use HTTPS).
5. File uploads & permissions: ensure uploaded files are stored outside web root or protected with access rules, and check permissions.

## Handoff checklist (short)

1. Sanitize `engine/db.php` — remove production secrets.
2. Import `__db__/schema.sql` and create a superadmin user (use hashed password).
3. Verify login and access to `/apex/index.php` and `/console/index.php`.
4. Run a quick security pass (prepared statements, remove plaintext password fallback).
5. Add a small smoke test or CI job that verifies DB connection and login flow.

See `docs/Handoff-Checklist.md` for a longer checklist.

## Contributing

- This is a plain PHP codebase. When adding new features, follow existing patterns: include shared partials from `includes/`, place business logic in `utils/`, and prefer prepared statements for DB access.
- If you add database changes, include a migration SQL file and update `docs/Database.md`.

## Where to find more docs

- Onboarding docs are in `docs/` — start with `docs/README.md` and `docs/Setup.md`.


---

Last updated: 2025-11-07
