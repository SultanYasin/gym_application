import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = formData;
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {user && <p>Signed up successfully!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
