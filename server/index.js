const express = require("express");

const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.sendFile("./index.html");
  }
});

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
    res.sendFile("./index.html");
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.sendFile("./index.html");
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    //On Error
    console.error(err.message);
    res.sendFile("./index.html");
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    //On Error
    console.log(err.message);
    res.sendFile("./index.html");
  }
});


app.post("/measurements", async (req, res) => {
  try {
    const { date, chest, biceps, shoulders } = req.body;
    const newMeasurement = await pool.query(
      "INSERT INTO measurements (date, chest, biceps, shoulders) VALUES($1, $2, $3, $4) RETURNING *",
      [date, chest, biceps, shoulders]
    );

    res.json(newMeasurement.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/measurements', async (req, res) => {
  // This code attempts to retrieve measurements from a database,
  // but if an error occurs, it will be caught and handled by the error middleware.
  try {
    const measurements = await db.getMeasurements();
    res.send(measurements);
  } catch (err) {
    next(err);
  }
});

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Internal server error' });
});

app.listen(() => {
  console.log(`Server has started on port 5000`);
});