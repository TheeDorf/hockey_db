import React, { useState, useEffect } from "react";
import background from "./assets/NHL_Logo.png";

const API_KEY = '120dbbf960msh3b1dc96d2563f33p17472djsnc2a87881d164';

const LiveScores = () => {
  const [games, setGames] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [isLoading, setIsLoading]= useState(true);
  const [news, setNews]= useState({})

  const fetchGames = async () => {
    const options = {
      method: 'GET',
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "nhl-api5.p.rapidapi.com",
      },
    };

    // Fetch live game scores
    // const liveScoresResponse = await fetch(
    //   "https://nhl-api5.p.rapidapi.com/nhlscoreboard?year=2023&month=04&day=18&limit=5",
    //   options
    // );
    // const liveScoresData = await liveScoresResponse.json();
    // if (liveScoresData.games) {
    //   setGames(liveScoresData.games);
    // }


  fetch(
    "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard"
  )
 .then(response => response.json())
 .then ((data) => {
  setSchedule(data)
  console.log(data)
 }).catch (err=> console.error(err)).finally(()=> {
  setIsLoading(false)
 });
  
//  fetch(
//   "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news"
// )
// .then(response => response.json())
// .then ((news) => {
// setNews(news)
// console.log(news)
// }).catch (err=> console.error(err)).finally(()=> {
// setIsLoading(false)
// });
  
  };
  
  

let timeHandler = (time) => {
  let date = new Date(time);
  let options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/New_York",
  };
  let formattedDate = date.toLocaleString("en-US", options);
  formattedDate += " EST";
  return formattedDate;
};


  useEffect(() => {
 fetchGames();
   timeHandler("2023-04-15T00:00Z")
  }, []);
  console.log("screenshot if showing",games)
  if (isLoading)
  {return <h1>Loading</h1>
    
  }
  
  return (
    <div className="live-scores-container">
      <img src={background} alt="NHL LOGO" />
      <div className="card">
      <h2>NHL Schedule</h2>
      <div className= "newCard">
      {schedule.events.map((game) => {
        
        return (
          <div className="game-box">
            <p>{ game.name }</p>
            <p> Date & Time: { timeHandler (game.date) } </p>
            <p> Odds: { game.competitions[0].odds[0].details } </p>
            <p> Over/Under: { game.competitions[0].odds[0].overUnder } </p>
            <p> Time: { game.status.displayClock } </p>
            <p> Period: { game.status.period } </p>
         </div>

        );
        
      })}
      </div>
    
      
      </div>
    </div>
 );
// return (

// <div className="full-container">
//   <img src={background} alt="NHL LOGO" />
//   <div className="card">
// <h2 class="title">Live Scores</h2>
// <div className="live-box">
// <section>
// <p>Home team</p>
// <p>Away team</p>
// <p>Period: #</p>
// <p>Home team Goals #</p> 
// <p>Home team Goals #</p> 
// </section>
// </div>

// <section>
// <h2 class="title">NHL Schedule</h2>
// <div className="game-box">
//  <p>gameshortName</p>
// <p> Date & Time:  </p>
//  <p> Period:  </p>
// </div>
// </section>
// </div>  
// </div>

// )
}

export default LiveScores;
