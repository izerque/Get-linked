import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';import './App.css';
import Timeline from './pages/Timeline'



function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
