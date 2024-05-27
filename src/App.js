import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/export';
import SignIn from './Pages/SignIn';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
