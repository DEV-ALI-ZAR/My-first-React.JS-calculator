import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={LoginForm} />
          {/* Use PrivateRoute to protect the dashboard route */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
