Directory reference — Rider-Console

Top-level files/folders
- `index.php` — Public sign-in page for the application (root).
- `apex/` — Administrative interface (superadmin/admin pages). Example: `apex/initiatives/`.
- `console/` — Business/manager-facing console pages (business workflows).
- `engine/` — Backend utilities and controllers:
  - `db.php` — DB connection and global constants
  - `authentication.php` — Login processing
- `includes/` — Shared UI partials (header, sidebar, top-nav)
- `assets/` — CSS, JS, images, vendor libs and bundles
- `utils/` — Business logic helper modules (e.g., `business.php`, `riders.php`, `rentals.php`)
- `__db__/` — SQL files (`db.sql`, `schema.sql`) with schema and seed SQL

Key files to look at when onboarding
1. `engine/db.php` — set DB connection and CDN URL.
2. `engine/authentication.php` — login and session logic, role handling.
3. `__db__/schema.sql` — canonical schema and constraints.
4. `apex/` and `console/` — review page routing, forms and usage patterns.
5. `utils/` — business logic implementations used across pages.
6. `includes/` — layout consistency and shared markup.

Common patterns
- Pages include `includes/head.php` and other includes via absolute path using `$_SERVER['DOCUMENT_ROOT']`.
- POST handlers live in `engine/` or inline in page controllers.

Where to make quick changes
- UI tweaks: `assets/css/` and `assets/js/`.
- DB config: `engine/db.php`.
- Add new admin features: `apex/` and `utils/` functions.
