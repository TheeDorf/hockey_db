import React, { useState, useEffect } from "react";
import background from "../assets/NHL_Logo.png";

const TeamsList = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await fetch(
      "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams"
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
      <img className="teamBackgroundImg" src={background} alt="NHL LOGO" />
      <div className="team">
        <h1 className= "teamTitle">NHL Teams</h1>
        <div className="teams-grid">
          {teams.map((num) => (
            <div key={num.team.id} className="team-card">
              <h2>{num.team.location}</h2>
              <img className="teamListLogo" src={num.team.logos[0].href} alt={num.team.location} />
              <p>Abbreviation: {num.team.abbreviation}</p>
              <p>Team Name: {num.team.shortDisplayName}</p>
              {/* <p>Division: {num.team.division.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsList;
