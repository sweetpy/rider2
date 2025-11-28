Rider-Console — Architecture overview

Tech stack
- Backend: Plain PHP + mysqli (no framework)
- Database: MySQL / MariaDB
- Frontend: Server-rendered HTML templates, CSS and JS in `assets/`

High-level structure
- Public entry points are server-rendered PHP files located at the project root and under `apex/` and `console/`.
- `engine/` contains backend glue code (database connection, authentication).
- `includes/` contains reusable partials (head, sidebar, top-nav).
- `utils/` contains small PHP modules encapsulating business logic (e.g., `business.php`, `riders.php`, `rentals.php`).

Authentication & session
- `engine/authentication.php` handles login requests.
- Sessions are PHP sessions; `session_start()` is used in authentication and other pages where needed.
- The login flow does the following:
  - Reads email and password from POST
  - Queries `administrator` table for a matching email
  - Uses `password_verify()` if password is hashed, or falls back to a direct string comparison (see security notes below)
  - Sets session variables for user and redirects to `/apex/index.php` (superadmin) or `/console/index.php` (other users)

Database access
- `engine/db.php` creates a `mysqli` connection and is included by pages that need DB access.

Design and multi-tenancy
- The DB includes a `businesses` table; `administrator` rows include `business_id` to scope user actions.
- Most business-related tables include a `business_id` foreign key, suggesting per-business scoping.

Security notes and suggested improvements
- Current code uses interpolated SQL queries (with `real_escape_string`) — prefer prepared statements to reduce risk of SQL injection.
- The authentication code falls back to plaintext password comparison if `password_verify()` fails; enforce hashed passwords and remove the plaintext fallback.
- Database credentials are hard-coded in `engine/db.php`. Move to environment variables or a secure config mechanism for production.

When handing off
- Point new team to `engine/db.php`, `engine/authentication.php`, `__db__/schema.sql`, and `utils/` as primary entry points for back-end logic.
