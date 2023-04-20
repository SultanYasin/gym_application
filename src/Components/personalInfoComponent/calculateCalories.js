
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [pal, setPal] = useState("");

  const calculateBMR = (weight, height, age, gender) => {
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return bmr;
  };

  const calculateCalories = (bmr, pal) => {
    return bmr * pal;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bmr = calculateBMR(
      Number(weight),
      Number(height),
      Number(age),
      gender
    );
    const totalCalories = calculateCalories(bmr, Number(pal));
    alert(`Your total daily calorie intake is: ${totalCalories} calories.`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "50%",
        margin: "7vh auto ",
      }}
    >
      <TextField
        label="Weight (kg)"
        variant="outlined"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Height (cm)"
        variant="outlined"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Age (years)"
        variant="outlined"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Gender (male/female)"
        variant="outlined"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      />
      <br />

      <FormControl component="fieldset">
        <FormLabel component="legend">Physical Activity Level</FormLabel>
        <RadioGroup
          aria-label="PAL"
          name="pal"
          value={pal}
          onChange={(e) => setPal(e.target.value)}

        >
          <FormControlLabel value="1.2" control={<Radio />} label="Sedentary" />
          <FormControlLabel
            value="1.375"
            control={<Radio />}
            label="Lightly active"
          />
          <FormControlLabel
            value="1.55"
            control={<Radio />}
            label="Moderately active"
          />
          <FormControlLabel
            value="1.725"
            control={<Radio />}
            label="Very active"
          />
          <FormControlLabel
            value="1.9"
            control={<Radio />}
            label="Extra active"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Calculate
      </Button>
    </form>
  );
}

export default CalorieCalculator;

