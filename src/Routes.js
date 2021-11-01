import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import SingUp from './pages/Login/SingUp';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/singup" component={SingUp} />
        <>
          <Nav />
          <Menu />
        </>
      </Switch>
    </Router>
  );
};

export default Routes;
