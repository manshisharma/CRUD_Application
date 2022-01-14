import './App.css';
import React from 'react';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/all" exact component={AllUsers} />
        <Route path="/add" exact component={AddUsers} />
        <Route path="/edit/:id" exact component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
