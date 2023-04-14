import React, { useState, useEffect } from "react";

const API_KEY = "120dbbf960msh3b1dc96d2563f33p17472djsnc2a87881d164";

const LiveScores = () => {
  const [games, setGames] = useState([]);
  const [schedule, setSchedule] = useState([]);

//   const fetchGames = async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": API_KEY,
//         "X-RapidAPI-Host": "nhl-api5.p.rapidapi.com",
//       },
//     };

//     // Fetch live game scores
//     const liveScoresResponse = await fetch(
//       "https://nhl-api5.p.rapidapi.com/nhlsbox?id=401458986",
//       options
//     );
//     const liveScoresData = await liveScoresResponse.json();
//     if (liveScoresData.games) {
//       setGames(liveScoresData.games);
//     }

//     // Fetch NHL schedule
//     const scheduleResponse = await fetch(
//       "https://nhl-api5.p.rapidapi.com/nhlschedule?year=2023&month=04&day=14",
//       options
//     );
//     const scheduleData = await scheduleResponse.json();

//     console.log(schedule);

//     setSchedule(scheduleData);
//     // if (scheduleData.dates && scheduleData.dates[0].games) {
//     // }
//   };
 
  
  let timeHandler = (time) => {
    let start = time.indexOf("T")
    let end = time.indexOf("Z")
    let num = parseInt(time.substring(start, end).replace("T", "").replace(":", ""));
    console.log(num)
  if ( num == 0) {
    num = 2400;
    console.log(num)
  }else {num = parseInt(time.substring(start, end).replace("T", "").replace(":", ""))};
  let temp = (num- 400) > 1200 ? num-400 - 1200 +"pm EST" : num-400+"am EST";

  console.log(temp)
}


  useEffect(() => {
    // fetchGames();
   timeHandler("2023-04-15T00:00Z")
  }, []);

  return (
//     <div className="live-scores-container">
//        <h2>Live Scores</h2>
//       {games.length > 0 ? (
//         games.map((game) => (
//           <div key={game.gamePk} className="game-box">
//             <p>{game.teams.away.team.name}</p>
//             <p>{game.teams.home.team.name}</p>
//             <p>{game.livescore.currentPeriodOrdinal}</p>
//             <p>
//               {game.livescore.teams.away.goals} -{" "}
//               {game.livescore.teams.home.goals}
//             </p>
//           </div>
//         ))
//       ) : (
//         <p>No live games</p>
//       )}

//       <h2>NHL Schedule</h2>

//       {schedule[20230414].games.map((game) => {
        
//         return (
//           <div className="game-box">
//             <p>{game.shortName}</p>
//             <p> Date & Time: { timeHandler(game.date) } </p>
//             <p> Period: { game.status.period } </p>
//           </div>
//         );
//       })}
    <section>
      <h2>NHL Schedule</h2>
      <div className="game-box">
             <p>gameshortName</p>
             <p> Date & Time:  </p>
             <p> Period:  </p>
           </div>
    </section>
//     </div>
 );
 };

export default LiveScores;
