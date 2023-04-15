import React, { Fragment, useEffect, useState } from "react";

import Edit from "./Edit";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleCheckboxChange = (event, todo) => {
    if (event.target.checked) {
      setCompletedTodos((prevState) => [...prevState, todo]);
    } else {
      setCompletedTodos((prevState) =>
        prevState.filter((completedTodo) => completedTodo.id !== todo.id)
      );
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Exercise name</th>
            <th>Edit</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <Edit todo={todo} />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={completedTodos.some(
                    (completedTodo) => completedTodo.id === todo.id
                  )}
                  onChange={(event) => handleCheckboxChange(event, todo)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
