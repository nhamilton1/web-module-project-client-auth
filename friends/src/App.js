import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import HomePage from './components/HomePage';
import NewFriend from './components/NewFriend';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const isLoggedIn = localStorage.getItem("token")

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            {isLoggedIn && <Link to="/friends">New Friend</Link>}
          </li>
          <li>
            {isLoggedIn ? <Link to="/logout">Logout</Link> : <div></div>}
          </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/friends" component={NewFriend} />
          <Route exact path="/" component={HomePage} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
