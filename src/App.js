import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
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
      <BrowserRouter>
      <div className="grid-container">
      <header className="row">
      <div>
            <Link className="brand" to="/">
              NameWebsite
            </Link>
      </div>
      </header>
      <main>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Private">
            <Private />
          </Route>
        </main>
        </div>
      </BrowserRouter>
  );
}

export default App