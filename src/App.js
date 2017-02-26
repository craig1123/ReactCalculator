import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Home from "./components/Home";
import Feed from "./components/Feed";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";

export default class App extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/feed" component={Feed}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/favorites" component={Favorites}/>
      </Router>
    );
  }
}
