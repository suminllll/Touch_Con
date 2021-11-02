import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
<<<<<<< HEAD
import SignUp from './pages/Login/SignUp';
=======
import SingUp from './pages/Login/SingUp';
import History from './components/History/History';
>>>>>>> 92cc24c (menu,history,sign)

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Nav />
        <Menu />
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
