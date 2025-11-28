Quick setup — Rider-Console

Requirements
- PHP 7.4+ with mysqli extension
- MySQL / MariaDB
- Web server (Apache/Nginx) or PHP built-in server for local testing
- Recommended: Composer (not required by repository) and Git

Local quick-start (development)
1. Clone repository to your web server document root or a folder that your web server serves.
2. Ensure PHP and MySQL are installed.

Import database schema
- The SQL schema is in `__db__/schema.sql` (and `__db__/db.sql`). Import it into MySQL:

```bash
# Replace `ridertz_general` with your chosen DB name if desired
mysql -u root -p < __db__/schema.sql
```

Configure DB connection
- Edit `engine/db.php` to set DB host, username, password and database name. Example keys in file:
  - `$host`, `$username`, `$password`, `$database`
- The app uses mysqli and expects a database with the schema from `__db__/schema.sql`.

Serve the app locally (simple option)
- From the project root, run:

```bash
php -S localhost:8000 -t .
```

- Then open http://localhost:8000 in your browser.

Notes
- `engine/db.php` currently contains credentials for a local environment; move these to environment variables or a separate config for production.
- Ensure file/directory permissions for the web server allow reading `assets/` and writing any upload directories (if used).
- If using Apache/Nginx, create a virtual host pointing the document root to the project root.
