import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      <Routes>
        <Route exact path="/" element={<LiveScores/>} ></Route>
        <Route exact path="/teams" element={<TeamsList/>} ></Route>
        <Route exact path="/news" element={<NHLNews/>} ></Route>
      </Routes>
    </Router>
  );
};

export default App;
