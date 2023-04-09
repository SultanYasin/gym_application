import { Box } from "@mui/material";
import React from 'react';

function Profile() {
  return (
    <Box mt="100px" ml="50px">
      <h2>here you can track your progress</h2>
      <button onClick={()=>console.log("hi")} >Login</button>
    </Box>
  );
}

export default Profile;
