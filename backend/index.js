const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

// Open a connection to the SQLite database, create the file if it doesn't exist
const db = new sqlite3.Database('./blogflow.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Set up middleware to parse JSON
app.use(express.json());

// Create the posts table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL
    );
  `, (err) => {
    if (err) {
      console.error('Error creating table', err.message);
    } else {
      console.log('Posts table created or already exists');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});