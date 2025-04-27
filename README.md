# Petitions SPA
A full-stack Single Page Application for creating and signing petitions. This particular implementation showcases a petition to move CPTS 489 classes to afternoon time slots during winter.

## Features
- View petition information
- Sign the petition with your name, city, and state
- View all signatures in a table format
- Real-time form validation

## Technologies Used

### Frontend
- React 19
- Axios for API requests
- CSS for styling

### Backend
-Express.js
-Sequelize ORM
-SQLite database
-Express Session for session management

## Installation
1. Clone the repository:

```
git clone https://github.com/Obskyur/Petitions-SPA.git
cd "Petitions SPA"
```

2. Install dependencies for client, server, and the root project:

`npm run install-all`

This command installs dependencies for the root project, the client, and the server.

3. Running the Application
Start both the client and server with a single command:

`npm start`

This will:

- Start the server on http://localhost:4000
- Start the client on http://localhost:3000
- Initialize the database with sample signatures

You can also start them separately:
```
# Start just the server
npm run server

# Start just the client
npm run client
```

## Project Structure
```
.
├── client/                 # React frontend
│   ├── public/             # Static files
│   └── src/                # React source code
│       ├── components/     # React components
│       └── App.jsx         # Main application component
│
└── server/                 # Express backend
    ├── database/           # SQLite database file
    ├── models/             # Sequelize models
    ├── routes/             # API routes
    ├── app.js              # Server entry point
    └── db.js               # Database connection
```
## API Endpoints
**GET /api/signatures:** Fetch all petition signatures

**POST /api/signatures:** Add a new signature

## Development
The server automatically resets the database on startup and adds default signatures for testing purposes.