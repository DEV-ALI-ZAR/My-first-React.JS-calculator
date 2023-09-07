import React from 'react';
import Calculator from './Calculator'; // Import the Calculator component
import './LoginForm.css';
function Dashboard() {
  const username = localStorage.getItem('username');
  // ...

  return (
    <div>
      <h1>-----Welcome, {username}-----!</h1>
      <Calculator /> {/* Include the Calculator component */}
      {/* Other dashboard content */}
    </div>
  );
}

export default Dashboard;
