import React, { useState, useEffect } from "react";
import background from "../assets/NHL_Logo.png";

const TeamsList = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await fetch(
      "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams"
    );
    const data = await response.json();
    console.log(data)
    setTeams(data.sports[0].leagues[0].teams);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="teams-container">
      <img className="backgroundImg" src={background} alt="NHL LOGO" />
      <div className="team">
        <h1>NHL Teams</h1>
        <div className="teams-grid">
          {teams.map((team) => (
            <div key={team.id} className="team-card">
              <h2>{team.location}</h2>
              <img src={team.logo} alt={team.location} />
              <p>Abbreviation: {team.team.abbreviation}</p>
              <p>Conference: {team.team.conference.name}</p>
              <p>Division: {team.team.division.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsList;
