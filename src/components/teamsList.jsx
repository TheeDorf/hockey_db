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
   
   <div>
      
      <h1>NHL Teams</h1>
      <img className="backgroundImg" src={background} alt="NHL LOGO" />
      {teams.map((team) => (
        <div key={team.id}>
          <h2>{team.location}</h2>
          <img src={team.logo} alt={team.location} />
          <p>Abbreviation: {team.abbreviation}</p>
          <p>Conference: {team.conference?.name}</p>
          <p>Division: {team.division?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamsList;
