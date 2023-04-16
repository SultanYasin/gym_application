import React, { useState } from "react";
import ExercisesList from "../components/exercisesListComponent/Exercises";
import CalculateCalories from "../components/personalInfoComponent/calculateCalories"

function Profile() {
  const [showListComponent, setShowListComponent] = useState(false);
  const [showCalculateCaloriesComponent, setShowCalculateCaloriesComponent] = useState(false);

  const handleExercisesList = () => {
    setShowListComponent(!showListComponent);
  };
  const handleCalculateCalories = () => {
    setShowCalculateCaloriesComponent(!showCalculateCaloriesComponent);
  };

  return (
    <div>
      <button type="button" onClick={handleExercisesList}>Add Workout</button>
      { showListComponent && <ExercisesList />}
   
      <button type="button" onClick={handleCalculateCalories} >Calculate calories & BMR</button>
      {showCalculateCaloriesComponent && <CalculateCalories /> }
     
      <button type="button">Track your process</button>
    </div>
  );
}

export default Profile;
