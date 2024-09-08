const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

const db = new sqlite3.Database('./blogflow.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS blogs (id INTEGER PRIMARY KEY, title TEXT, content TEXT)');
});

app.use(express.json());
app.use(cors());

// Get all blogs
app.get('/blogs', (req, res) => {
  db.all('SELECT * FROM blogs', (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// Get a single blog
app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM blogs WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Blog not found');
    res.json(row);
  });
});

// Create a blog
app.post('/blog', (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO blogs (title, content) VALUES (?, ?)', [title, content], function (err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).json({ id: this.lastID });
  });
});

// Delete a blog
app.delete('/blogs/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM blogs WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});