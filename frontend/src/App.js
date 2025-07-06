import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import WeatherApp from './components/WeatherApp';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/weather" element={<WeatherApp />} />
  </Routes>
);

export default App;
// This code defines the main application component for a React application using React Router.
// It sets up three routes: the root path ("/") for the Login component, "/register" for the Register component, and "/user" for the UserInfo component.
// The Routes component manages the routing logic, rendering the appropriate component based on the current URL path.
// The App component is exported as the default export, allowing it to be used in the main entry point of the application.          