import React, { useState, useEffect } from "react";
import background from "../assets/NHL_Logo.png";


const LiveScores = () => {
  const [games, setGames] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [isLoading, setIsLoading]= useState(true);
  const [selectedGame, setSelectedGame] = useState(-1)
  const [news, setNews]= useState({})

  const fetchGames = async () => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     "X-RapidAPI-Key": API_KEY,
    //     "X-RapidAPI-Host": "nhl-api5.p.rapidapi.com",
    //   },
    // };



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
  
 fetch(
  "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news"
)
.then(response => response.json())
.then ((news) => {
setNews(news)
console.log(news)
}).catch (err=> console.error(err)).finally(()=> {
setIsLoading(false)
});
  
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
      <h2>NHL Scores</h2>
      <img className="backgroundImg" src={background} alt="NHL LOGO" />
      <div className="card">
      <div className="newCard">
          {schedule.events.map((game, index) => {
            const isGameSelected = index === selectedGame;
            return (
              <div className="game-box" key={game.id}>
                <h3 onClick={()=> setSelectedGame(isGameSelected ? -1 : index)}>{ game.name }</h3>
                {isGameSelected && (
                  <>
                    <img className="teamLogo" src={ game.competitions[0].competitors[1].team.logo } alt="" />
                    <img className="teamLogo" src={ game.competitions[0].competitors[0].team.logo } alt="" />
                    <p>Away Score: { game.competitions[0].competitors[1].score } --- Home Score: { game.competitions[0].competitors[0].score }</p> 
                    <p>Date & Time: { timeHandler (game.date) }</p>
                    <p>Odds: { game.competitions[0].odds[0].details ? game.competitions[0].odds[0].details : "Game Started" }</p>
                    <p>Over/Under: { game.competitions[0].odds[0].overUnder ? game.competitions[0].odds[0].overUnder : "Game Started" }</p>
                    <p>Time: { game.status.displayClock }</p>
                    <p>Period: { game.competitions[0].status.period }</p>
                  </>
                )}
              </div>
            );
          })}
      </div>
    
      
      </div>
    </div>
 );

}

export default LiveScores;
