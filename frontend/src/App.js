import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import WeatherApp from './components/WeatherApp';

const App = () => (
  <Router basename="/">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/weather" element={<WeatherApp />} />
    </Routes>
  </Router>
);

export default App;

// This code sets up a React application with routing using React Router.