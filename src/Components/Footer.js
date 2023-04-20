import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="100px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "200px", height: "41px", marginTop: "43vh" }}
      />
    </Stack>
  </Box>
);

export default Footer;
