import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      {/* each exercise going to be a link to its own page that have the details */}
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack>
        <Typography
          sx={{ color: "black", fontSize: "22px" }}
          textAlign="center"
          borderRadius="15px"
        >{`${exercise.name}`}</Typography>

        <Typography
          sx={{ color: "#fff", background: "#552255", fontSize: "22px" }}
          textAlign="center"
          borderRadius="15px"
        >
          {`  ${exercise.bodyPart} / ${exercise.target}`}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;

/* 

import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;

*/
