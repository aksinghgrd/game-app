import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameHomePage from '../components/GameHomePage/GameHomePage';
import GameDetail from '../components/GameDetail/GameDetail';
import './App.module.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={GameHomePage}></Route>
            <Route path="/game/:gameId" exact component={GameDetail}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
