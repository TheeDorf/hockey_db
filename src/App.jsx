import React, { useState, useEffect } from "react";

const API_KEY = "120dbbf960msh3b1dc96d2563f33p17472djsnc2a87881d164";

const LiveScores = () => {
  const [games, setGames] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "nhl-api5.p.rapidapi.com",
        },
      };

      // Fetch live game scores
      const liveScoresResponse = await fetch(
        "https://nhl-api5.p.rapidapi.com/nhlsbox?id=401458986",
        options
      );
      const liveScoresData = await liveScoresResponse.json();
      if (liveScoresData.games) {
        setGames(liveScoresData.games);
      }

      // Fetch NHL schedule
      const scheduleResponse = await fetch(
        "https://nhl-api5.p.rapidapi.com/nhlschedule?year=2022&month=05&day=11",
        options
      );
      const scheduleData = await scheduleResponse.json();
      if (scheduleData.dates && scheduleData.dates[0].games) {
        setSchedule(scheduleData.dates[0].games);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="live-scores-container">
      <h2>Live Scores</h2>
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game.gamePk} className="game-box">
            <p>{game.teams.away.team.name}</p>
            <p>{game.teams.home.team.name}</p>
            <p>{game.livescore.currentPeriodOrdinal}</p>
            <p>
              {game.livescore.teams.away.goals} -{" "}
              {game.livescore.teams.home.goals}
            </p>
          </div>
        ))
      ) : (
        <p>No live games</p>
      )}

      <h2>NHL Schedule</h2>
      {schedule.length > 0 ? (
        schedule.map((game) => (
          <div key={game.gamePk} className="game-box">
            <p>{game.teams.away.team.name}</p>
            <p>{game.teams.home.team.name}</p>
            <p>{game.gameDate}</p>
          </div>
        ))
      ) : (
        <p>No scheduled games</p>
      )}
    </div>
  );
};

export default LiveScores;
