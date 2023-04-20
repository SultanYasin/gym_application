const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(bodyParser.json());

app.post('http://localhost:5000//measurements', async (req, res) => {
  const { date, chest, biceps, shoulders } = req.body;

  const result = await pool.query(
    'INSERT INTO measurements (date, chest, biceps, shoulders) VALUES ($1, $2, $3, $4) RETURNING *',
    [date, chest, biceps, shoulders]
  );

  res.send(result.rows[0]);
});

app.get('/measurements', async (req, res) => {
  const result = await pool.query('SELECT * FROM measurements ORDER BY date DESC');

  res.send(result.rows);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
