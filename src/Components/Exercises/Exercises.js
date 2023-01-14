import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../UtilityFunctions/FetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "../Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value); // this value comes from the pagination component
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "50px" } }} alignItems="center">
        {exercises.length > 9 && ( // if there is more than 9 exercises then => show the pagination 
          <Pagination
            color="primary"
            variant="outlined"
            count={Math.ceil(exercises.length / exercisesPerPage)} // get the higher number divided by 9 because I have 9 st per side
            page={currentPage} // a state elemenet 
            onChange={paginate} // function 
            size="small"
            showFirstButton
            showLastButton
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

/* import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import pagination from "@mui/material/Pagination";

import { exerciseOptions, fetchData } from "../../UtilityFunctions/FetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="45px">
        Results :
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ lg: "110px", xs: "50px" }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise = {exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
 */
