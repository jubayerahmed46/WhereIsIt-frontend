# (WhereIsIt) - A Lost and Found Items Related Website

## Purpose

This project is a Lost and Found Website, a platform designed to connect individuals who have lost personal belongings with those who may have found them. Users can report lost items, browse found items, and interact to recover their belongings. It provides practical experience in building full-stack applications, user authentication, file uploads, database management, and API integration.

## Live URL

**Firebase**: [https://whereisit-84e04.web.app](https://whereisit-84e04.web.app)

## Key Features

### Authentication System

- **Login and Register Pages**:
  - Email and password-based authentication.
  - Google or GitHub login option.
- **User Account Management**:
  - Profile picture and name are displayed in the navbar.
  - Don't access special routes before logging in.

### Navigation and Layout

- **Navbar**:
  - Website logo and navigation links.
  - Conditional display of login/logout buttons.
  - Hovering over the profile picture displays the user's name.
- **Footer**:
  - A beautiful footer with eye-protecting colors.
- **Dynamic Titles**:
  - Page titles update dynamically based on the current route.

### Core Features

- **Home Page**:
  - A slider with three images and informative text.
  - Latest Lost and Found Items section displaying six recent posts.
  - Additional sections with relevant content.
- **Lost and Found Items Page**:
  - Displays all items in card format.
  - Search functionality to filter items by title or location.
- **Add Lost & Found Item Page**:
  - Users can submit lost or found item details via a form.
  - Successfully submitted posts are stored in the database and display a success toast.
- **Post Details Page**:
  - Displays detailed information about a specific post.
  - Modal functionality for updating item recovery status.
- **Submit Details Form**:
  - A modal form for submitting recovery details.
- **Manage My Items Page**:
  - Displays user-added posts in a table format.
  - Includes update and delete options with confirmation prompts.
- **Update Items Page**:
  - Updated posts are saved with a success toast.
- **All Recovered Items Page**:
  - Displays all recovered items in a table format with key details.
  - Toggle between card and table layouts.

### Additional Features

- **404 Page**: Displays a custom not-found message for invalid routes.
- **Loading Spinner**: Indicates loading states during data fetch.
- **Toast Notifications**: For all CRUD operations, providing meaningful feedback to users.
- **JWT Authentication**: Implements secure routes using JSON Web Tokens.

## Technologies Used

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**

### Frontend

- **React.js**
- **Tailwind CSS**
- **Firebase Authentication**
- **Axios**
- **React Router**

### Additional Libraries

- **@material-tailwind/react**: For UI components.
- **Framer Motion**: For animations.
- **React Datepicker**: For selecting dates.
- **SweetAlert2**: For alerts and confirmation modals.
- **React Hook Form**: For form handling.
- **React Hot Toast**: For notifications.

## NPM Packages

- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- multer

## Repositories

- **Client Repository**: [GitHub Client](https://classroom.github.com/a/OeQd7p08)
- **Server Repository**: [GitHub Server](https://classroom.github.com/a/Kdivoc6q)

## Assignment Category - **11**

### Requirement Document [https://docs.google.com/document/d/1dZq4ULnHorWnGcxBWFRcxq7a4wuGuxigUF-NY-uRX2o/edit?usp=sharing](https://docs.google.com/document/d/1dZq4ULnHorWnGcxBWFRcxq7a4wuGuxigUF-NY-uRX2o/edit?usp=sharing)

## Run this in you device

First, clone the repository to your local machine using Git:

```cmd
git clone  git@github.com:jubayerahmed46/my-project.git
```

Change the directory

```cmd
cd my-project
```

Run this command

```cmd
npm i
```

```cmd
npm run dev
```
