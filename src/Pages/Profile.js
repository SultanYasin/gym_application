import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import ExercisesList from "../components/exercisesListComponent/Exercises";
import CalculateCalories from "../components/personalInfoComponent/calculateCalories";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [showListComponent, setShowListComponent] = useState(false);
  const [showCalculateCaloriesComponent, setShowCalculateCaloriesComponent] =
    useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    auth.signOut();
    localStorage.removeItem("email");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        logout();
      }
    });

    return unsubscribe;
  }, [auth, navigate]);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, [auth]);

  const handleExercisesList = () => {
    navigate("/profile/exercisesList");
  };
  const handleCalculateCalories = () => {
    navigate("/profile/calculateCalories");
  };
  const handleProcess = () => {
    navigate("/profile/mussleSizeForm");
  };

  const buttonStyles = {
    backgroundColor: "#4caf50",
    border: "none",
    color: "white",
    padding: "12px 24px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
    >
      <button type="button" onClick={handleExercisesList} style={buttonStyles}>
        Add Workout
      </button>
      {showListComponent && <ExercisesList />}

      <button
        type="button"
        onClick={handleCalculateCalories}
        style={buttonStyles}
      >
        Calculate calories & BMR
      </button>
      {showCalculateCaloriesComponent && <CalculateCalories />}

      <button type="button" onClick={handleProcess} style={buttonStyles}>
        Track your process
      </button>
      <button onClick={logout} style={buttonStyles}>
        Logout
      </button>
    </div>
  );
}

export default Profile;

/* 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "../firebase";
import ExercisesList from "../components/exercisesListComponent/Exercises";
import CalculateCalories from "../components/personalInfoComponent/calculateCalories";

function Profile() {
  const [showListComponent, setShowListComponent] = useState(false);
  const [showCalculateCaloriesComponent, setShowCalculateCaloriesComponent] =
    useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleExercisesList = () => {
    setShowListComponent(!showListComponent);
  };
  const handleCalculateCalories = () => {
    setShowCalculateCaloriesComponent(!showCalculateCaloriesComponent);
  };

  return (
    <div>
      <h1>Welcome to your profile, {user ? user.email : "guest"}!</h1>
      <button type="button" onClick={handleExercisesList}>
        Add Workout
      </button>
      {showListComponent && <ExercisesList />}

      <button type="button" onClick={handleCalculateCalories}>
        Calculate calories & BMR
      </button>
      {showCalculateCaloriesComponent && <CalculateCalories />}

      <button type="button">Track your process</button>
    </div>
  );
}

export default Profile; */
