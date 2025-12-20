Both the frontend and backend servers start simultaneously using the command: `npm start`

## FRONTEND

In the `src` folder, we have the following directories:

* **Folder: "assets"**
  * Contains images (currently the profile picture). This is where images uploaded by users (profile pictures or posts) would have been stored.
* **Folder: "components"**
  * Contains all web pages (e.g., home, profile, login, etc.).
* **Folder: "models"**
  * (Will contain) object formats (e.g., Users with *n* fields). These would be used within components to avoid initializing them every time.
* **Folder: "services"**
  * (Will contain) services/functions that are used across multiple pages.

The main logic of the frontend is found in `app.jsx` and `router.jsx`:
* **"app.jsx"**: Handles Login / Logout functions.
* **"router.jsx"**: Handles web page routing/redirection.
* **"app.css"**: Contains all design elements used for styling pages, as well as animations.

## BACKEND

In the backend folder, we have the file **"index.js"**, where the user logic is managed:
* Database connection.
* Creation of a user "schema" (username, password, email, etc.).
* Implementation of "Login" (checks if the username and password match those in the database).
* User session verification (checking the cookie).
* Implementation of "Logout".
* Implementation of "Register".
* Implementation of user profile editing.

## P.S. Work in progress:

* On the **"Posts"** page, the **POST** button is implemented but does not function yet.
* On the **"Home"** page, there is no feed.
* On the **"Profile"** page, you cannot edit your profile picture yet.
* More aesthetic messages/alerts need to be added.

## What I learned:

* Working with classes and objects.
* Designing with CSS.
* Animations with CSS.
* Targeting specific CSS elements (:: and nth-of-type).
* Working with a local database.

