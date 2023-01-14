import React, { useState, useEffect } from 'react';
import {useParam} from 'react-router-dom'
import Box from '@mui/material'

import { exerciseOptions, fetchData } from '../UtilityFunctions/FetchData';
import Detail from './Detail';
import SimilarExercises from './SimilarExercises';
import ExercisesVedios from './ExercisesVedios';

const ExerciseDetail = () => {
  return (
    <div>
      <Detail />
      <SimilarExercises />
      <ExercisesVedios />
    </div>
  )
}

export default ExerciseDetail