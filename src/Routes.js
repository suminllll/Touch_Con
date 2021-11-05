import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import History from './components/History/History';
import RewardPublish from './pages/RewordCon/RewardPublish';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Menu />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/RewardPublish" component={RewardPublish} />
      </Switch>
    </Router>
  );
};

export default Routes;
