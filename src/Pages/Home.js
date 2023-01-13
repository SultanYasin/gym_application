import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import Exercises from "../Components/Exercises/Exercises";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercieses/SearchExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  /* changes will be in all the application that why those states exists here */

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
