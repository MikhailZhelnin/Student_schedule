import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Box} from "@mui/material";

import Header from "./layout/Header";
import {TimeTablePage, ExamsPage, TeachersPage} from './pages/index'

import './App.css';

function App() {
  return (
    <Box>
      <Header/>
      <Routes>
        <Route path='/' element={<TimeTablePage/>}/>
        <Route path='/exams' element={<ExamsPage/>}/>
        <Route path='/teachers' element={<TeachersPage/>}/>
      </Routes>
    </Box>
  );
}

export default App;
