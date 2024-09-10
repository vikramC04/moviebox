# MovieCurtain

**MovieCurtain** is a web application that allows users to search for movies and save them to their personal watchlist. The project is built using modern web development tools and integrates various technologies to provide a smooth user experience.

## Features

- **Movie Search**: Users can search for movies by title and view relevant information like ratings, genre, and synopsis.
- **Watchlist**: Users can add movies to their watchlist and manage it by adding or removing titles.
- **User Authentication**: User authentication is handled through Firebase, allowing users to create accounts and log in securely.
- **Responsive Design**: The application is built with a mobile-first design using HTML/CSS for responsiveness across various devices.
- **MongoDB Integration**: The watchlist data is stored in a MongoDB database, enabling persistence across sessions.

## Tech Stack

- **Frontend**:
  - **React**: For building an interactive and dynamic user interface.
  - **HTML/CSS**: For structuring and styling the web pages.

- **Backend**:
  - **Node.js** & **Express.js**: Used to handle API requests, manage server-side logic, and handle routes.
  - **MongoDB**: A NoSQL database to store user watchlist data.

- **Authentication**:
  - **Firebase**: Provides secure user login and registration using email and password.

## Installation

To get started with MovieCurtain locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/moviecurtain.git

2. **Install Dependencies**:
    ```bash
    cd moviecurtain
    npm install
    cd client
    npm install

3. **Create a .env file and update environment variables**:
   ```bash
   REACT_APP_API_URL=
   REACT_APP_API_KEY=

## Live Demo
Notice: Backend Database is hosted on render.com which has a first request response time up to 50 seconds after thirty minutes without a request. When visiting the watchlist, or adding a movie to the watchlist, beware that there can be delays. Refresh, sign in and sign out and try again after ~30 seconds and it will work with instant API requests if there are delays. 

Visit https://moviecurtain.netlify.app/

## Backend
The backend code is a seperate repository. Visit https://github.com/vikramC04/moviecurtain-backend to see the backend code that uses express.js and MongoDB
