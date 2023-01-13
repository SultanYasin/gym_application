import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import ExerciesDetail from "./Pages/ExerciseDetail";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <Box width="400px" sx={{width : {xl : '1488px'}}} m = 'auto' >
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercies/:id" element={<ExerciesDetail />} />
      </Routes>


      <Footer />
    </Box>
  );
}

export default App;
