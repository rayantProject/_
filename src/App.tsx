import React from 'react';
import Dispach from './components/Dispach';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/advise/:id" element={<Dispach />} />
        <Route path="/scan" element={<Dispach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
