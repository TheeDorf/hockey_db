import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LiveScores from './components/liveScores';
import TeamsList from './components/teamsList';
import NHLNews from './components/news';
import NavBar from './components/NavBar';





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
