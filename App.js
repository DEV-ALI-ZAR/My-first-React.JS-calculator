import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update imports

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
