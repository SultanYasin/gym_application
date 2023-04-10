import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="100px" bgcolor="#FFF3F4" >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
  
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>

  </Box>
);

export default Footer;
 /* 

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box
    position="fixed"
    bottom="0"
    left="0"
    width="100%"
    bgcolor="#FFF3F4"
    height="100px"
    sx={{ zIndex: 1 }}
  >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "40px" }} />
    </Stack>
  </Box>
);

export default Footer;
 */