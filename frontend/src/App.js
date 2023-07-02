import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
      
      </Routes>
    </BrowserRouter>
  );
};


export default App