import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import History from './components/History/History';
import RewardPublish from './pages/RewordCon/RewardPublish';
import RewardCh from './pages/RewordCon/RewardCh';
import RewardKeep from './pages/RewordCon/RewardKeep';
import RewardManagement from './pages/RewordCon/RewardManagement';
import RewardTh from './pages/RewordCon/RewardTh';
import AppDocDetail from './pages/Manager/AppDocDetail';
import Notice from './pages/Manager/Notice';
import NoticeRegister from './pages/Manager/NoticeRegister';
import PointAllocation from './pages/Manager/PointAllocation';
import TpManagement from './pages/TouchPoint/TpManagement';
import IhRewardCon from './pages/IssueHistory/IhRewardCon';
import IhTouchPoint from './pages/IssueHistory/IhTouchPoint';
import { useHistory, useParams } from 'react-router';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Menu />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        {/* 리워드 콘 폴더 */}
        <Route exact path="/RewardPublish" component={RewardPublish} />
        <Route exact path="/RewardCh" component={RewardCh} />
        <Route exact path="/RewardTh" component={RewardTh} />
        <Route exact path="/RewardManagement" component={RewardManagement} />
        <Route exact path="/RewardKeep" component={RewardKeep} />
        {/* 터치포인트 */}
        <Route exact path="/TpManagement" component={TpManagement} />
        {/* 발행내역 */}
        <Route exact path="/IhRewardCon" component={IhRewardCon} />
        <Route exact path="/IhTouchPoint" component={IhTouchPoint} />
        {/* 관리자 페이지 */}
        <Route exact path="/AppDocDetail" component={AppDocDetail} />
        <Route exact path="/Notice" component={Notice} />
        <Route exact path="/NoticeRegister" component={NoticeRegister} />
        <Route exact path="/PointAllocation" component={PointAllocation} />
      </Switch>
    </Router>
  );
};

export default Routes;
