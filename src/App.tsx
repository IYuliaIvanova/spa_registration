import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PersonalInfo } from './containers/PersonalInfo/PersonalInfo';
import { Main } from './layouts/Main';
import { SignUpInfoPage } from './pages/SignUpInfoPage/SignUpInfoPage';

function App() {
  return (
    <Routes>
      <Route element={<Main/>}>
        <Route path="/" element={<SignUpInfoPage/>}/>
        <Route path="/personalInfo" element={<PersonalInfo/>}/>
      </Route>
    </Routes>
  );
}

export default App;
