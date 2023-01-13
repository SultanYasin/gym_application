import React, { useState, useEffect } from "react";
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
