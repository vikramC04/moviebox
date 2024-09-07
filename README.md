# MovieCurtain 🎬

MovieCurtain is a web application that allows users to search for movies and read detailed information using the [TMDB API](https://www.themoviedb.org/documentation/api). Users can create accounts and log in using **Firebase Authentication**. The application is built with **React**, **HTML**, **CSS**, and **JavaScript** on the frontend, and **Node.js** on the backend.

**MovieCurtain** is a web application that allows users to search for movies and save them to their personal watchlist. The project is built using modern web development tools and integrates various technologies to provide a smooth user experience.

## Features

- **Movie Search**: Users can search for movies by title and view relevant information like ratings, genre, and synopsis.
- **Watchlist**: Users can add movies to their watchlist and manage it by adding or removing titles.
- **User Authentication**: User authentication is handled through Firebase, allowing users to create accounts and log in securely.
- **Responsive Design**: The application is built with a mobile-first design using HTML/CSS for responsiveness across various devices.
- **MongoDB Integration**: The watchlist data is stored in a MongoDB database, enabling persistence across sessions.

## Tech Stack

- **Frontend**: 
  - React: For building an interactive and dynamic user interface.
  - HTML/CSS: For structuring and styling the web pages.

- **Backend**:
  - Node.js & Express.js: Used to handle API requests and responses, manage server-side logic, and route handling.
  - MongoDB: A NoSQL database to store user watchlist data.

- **Authentication**:
  - Firebase: Provides secure user login and registration using email and password.

## Installation

To get started with MovieCurtain locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/moviecurtain.git

2. **Install dependencies**: Navigate into the project directory and install the required dependencies for both the backend and frontend:

```bash
cd moviecurtain
npm install

3. **Create .env File and Fill In Environment Variables**: 

```bash
REACT_APP_API_URL=
REACT_APP_API_KEY=
