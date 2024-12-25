# Lost and Found Items

## Purpose

This project is a Lost and Found Website, a platform designed to connect individuals who have lost personal belongings with those who may have found them. Users can report lost items, browse found items, and interact to recover their belongings. It provides practical experience in building full-stack applications, user authentication, file uploads, database management, and API integration.

## Live URL

[Live Site Link](https://whereisit-84e04.web.app)

## Key Features

### Authentication System

- **Login and Register Pages**:
  - Email and password-based authentication.
  - Google or GitHub login option.
  - Password validation: includes at least one uppercase letter, one lowercase letter, and a minimum of six characters.
  - Error messages or toasts for invalid input.
  - Toast notifications on successful login or registration.
- **User Account Management**:
  - Login redirects users to the home page.
  - Logged-in users remain authenticated on page reload.
  - Profile picture and name are displayed in the navbar.

### Navigation and Layout

- **Navbar**:
  - Website logo and navigation links.
  - Conditional display of login/logout buttons.
  - Hovering over the profile picture displays the user's name.
- **Footer**:
  - Relevant information with an attractive design.
- **Dynamic Titles**:
  - Page titles update dynamically based on the route.

### Core Features

- **Home Page**:
  - A banner/slider with meaningful information.
  - Latest Lost and Found Items section displaying six recent posts.
  - Additional sections with relevant content.
  - Framer Motion animations for an engaging user experience.
- **Lost and Found Items Page**:
  - Displays all items in card format.
  - Search functionality to filter items by title or location.
- **Add Lost & Found Item Page** (Private Route):
  - Users can submit lost or found item details via a form.
  - Fields include post type, thumbnail upload, title, description, category, location, date, and contact information.
  - Successfully submitted posts are stored in the database and display a success toast.
- **Post Details Page** (Private Route):
  - Displays detailed information about a specific post.
  - Includes conditional buttons (e.g., "Found This!" or "This is Mine!").
  - Modal functionality for updating item recovery status.
- **Manage My Items Page** (Private Route):
  - Displays user-added posts in a table format.
  - Includes update and delete options with confirmation prompts.
- **Update Items Page** (Private Route):
  - Pre-filled form for editing existing posts.
  - Updated posts are saved with a success toast.
- **All Recovered Items Page** (Private Route):
  - Displays all recovered items in a table format with key details.
  - Option to toggle between card and table layouts.

### Additional Features

- **404 Page**:
  - Displays a custom not-found message for invalid routes.
- **Loading Spinner**:
  - Indicates loading states during data fetch.
- **Toast Notifications**:
  - For all CRUD operations, providing meaningful feedback to users.
- **JWT Authentication**:
  - Implements secure routes using JSON Web Tokens.

## Technologies Used

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**

### Frontend

- **React.js**
- **Tailwind CSS**
- **Firebase Authentication**

### Additional Libraries

- **@material-tailwind/react**: For UI components.
- **Framer Motion**: For animations.
- **React Datepicker**: For selecting dates.
- **Axios**: For API calls.
- **SweetAlert2**: For alerts and confirmation modals.

## NPM Packages

- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- multer

## Repositories

- **Client Repository**: [GitHub Client](https://classroom.github.com/a/OeQd7p08)
- **Server Repository**: [GitHub Server](https://classroom.github.com/a/Kdivoc6q)

## Assignment Category

: Assignment_category:**11**

## Requirement Document

[Requirement Document](https://docs.google.com/document/d/1dZq4ULnHorWnGcxBWFRcxq7a4wuGuxigUF-NY-uRX2o/edit?usp=sharing)
