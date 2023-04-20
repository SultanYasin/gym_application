import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

function MuscleSizeForm() {
  const [muscleSizes, setMuscleSizes] = useState({
    biceps: "",
    triceps: "",
    chest: "",
    waist: "",
    arm_rest: "",
    foot: "",
    leg: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMuscleSizes((prevValues) => ({ ...prevValues, [name]: value }));
  };

  async function getMeasurements() {
    try {
      const response = await fetch('http://localhost:5000/measurements');
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching measurements:', error);
      // handle the error here, e.g. show an error message to the user
      return null;
    }
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetch("http://localhost:5000/measurements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: "2023-04-20",
          chest: 44,
          biceps: 18,
          shoulders: 52,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
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
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="biceps"
            label="Biceps"
            type="number"
            value={muscleSizes.biceps}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={122}>
          <TextField
            name="triceps"
            label="Triceps"
            type="number"
            value={muscleSizes.triceps}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="chest"
            label="Chest"
            type="number"
            value={muscleSizes.chest}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="waist"
            label="Waist"
            type="number"
            value={muscleSizes.waist}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="arm_rest"
            label="Arm Rest"
            type="number"
            value={muscleSizes.arm_rest}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="foot"
            label="Foot"
            type="number"
            value={muscleSizes.foot}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="leg"
            label="Leg"
            type="number"
            value={muscleSizes.leg}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" type="submit" style={{ width: "350px" }}>
            Submit
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" type="submit" style={{ width: "350px" }} onClick={getMeasurements} >
            get
          </Button>
        </Grid>
      </Grid>
    </form>
  );
  }
  export default MuscleSizeForm;

