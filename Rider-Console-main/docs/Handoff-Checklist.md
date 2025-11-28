Handoff checklist — Rider-Console

Purpose: These tasks and checks will help a new team pick up the project quickly.

Before handoff
- Ensure `__db__/schema.sql` is the canonical schema and is up-to-date.
- Ensure `engine/db.php` does not include sensitive production credentials; sanitize or remove before sharing externally.

Checklist for the receiving team
1. Environment
   - Install PHP 7.4+ and MySQL/MariaDB
   - Confirm `mysqli` PHP extension is enabled
2. Database
   - Import `__db__/schema.sql`
   - Create an initial `administrator` user using `password_hash()` for the password
3. Configuration
   - Update `engine/db.php` with DB credentials OR replace with an env-based config
   - Update `CDN_URL` in `engine/db.php` if assets are served from a different origin
4. Run and test
   - Start server (or configure virtual host) and login using the created admin
   - Verify `apex/index.php` and `console/index.php` pages render and key flows (create rider, create rental, create collection)
5. Security review (short)
   - Replace string-interpolated SQL with prepared statements where possible
   - Remove plaintext password fallback in `engine/authentication.php`
   - Ensure proper file permissions on upload directories and `assets/`
6. Developer onboarding notes
   - Code is plain PHP (no framework). New contributors should look at `includes/`, `utils/`, `engine/`, `apex/`, and `console/` in that order.
   - Common patterns: `$_SERVER['DOCUMENT_ROOT']` + absolute includes; form handling via POST to `engine/` scripts or local page handlers.

Optional next steps for maintainers
- Introduce a config file or env variable pattern (dotenv) for credentials.
- Add a minimal test harness (integration smoke tests) for login and a few core pages.
- Add a migration tool for schema evolution.

Contact / Notes
- If any credentials or third-party keys are required, provide them securely out-of-band.
- Document any known issues or in-progress refactors in project issue tracker or a `TODO.md` file.
