import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LiveScores from './components/liveScores';
import TeamsList from './components/teamsList';
import NHLNews from './components/news';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Live Scores</Link>
        </li>
        <li>
          <Link to="/teams">Teams List</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LiveScores} />
        <Route exact path="/teams" component={TeamsList} />
        <Route exact path="/news" component={NHLNews} />
      </Switch>
    </Router>
  );
};

export default App;
