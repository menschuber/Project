import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dash.js';
import Private from './Private.js';
import Login from './Login.js';
import useToken from './useToken.js';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Private">
            <Private />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App