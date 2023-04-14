import React, { useState, useEffect } from "react";

const API_KEY = "120dbbf960msh3b1dc96d2563f33p17472djsnc2a87881d164";

const LiveScores = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "nhl-api5.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://nhl-api5.p.rapidapi.com/nhlsbox?id=401458986",
        options
      );
      const data = await response.json();
      console.log(data)
      if (data.games) {
        setGames(data.games);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Live Scores</h2>
      {games.map((game) => (
        <div key={game.gamePk}>
          <p>{game.teams.away.team.name}</p>
          <p>{game.teams.home.team.name}</p>
          <p>{game.livescore.currentPeriodOrdinal}</p>
          <p>
            {game.livescore.teams.away.goals} -{" "}
            {game.livescore.teams.home.goals}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LiveScores;
