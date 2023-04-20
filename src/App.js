import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './pages/News';
import Diet from './pages/Diet';
import LoginForm from './pages/Login';
import ExercisesList from './components/exercisesListComponent/Exercises';
import CalculateCalories from './components/personalInfoComponent/calculateCalories';
import MuscleSizeForm from './components/personalInfoComponent/MussleSizeForm';




function App() {
  return (
    <div>
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile/exercisesList" element={<ExercisesList />} />
        <Route path="/profile/calculateCalories" element={<CalculateCalories />} />
        <Route path="/profile/mussleSizeForm" element={<MuscleSizeForm />} />
      </Routes>
    </Box>
      <Footer />
      </div>
  )
}

export default App