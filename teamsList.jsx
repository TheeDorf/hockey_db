import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news')
      .then(response => response.json())
      .then(data => {
        setTeams(data.sports[0].leagues[0].teams);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Team List</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.displayName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamInfo = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/${id}`)
      .then(response => response.json())
      .then(data => {
        setTeam(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{team.team.displayName} Information</h1>
      <p>Abbreviation: {team.team.abbreviation}</p>
      <p>City: {team.team.city}</p>
      <p>Conference: {team.team.conference.name}</p>
      <p>Division: {team.team.division.name}</p>
      <p>Record: {team.team.record.items[0].summary}</p>
      <p>Stadium: {team.team.venue.fullName}</p>
    </div>
  );
};
const App = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <TeamList />
            </Route>
            <Route path="/teams/:id">
              <TeamInfo />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };
  
  export default App;