import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <ul>
        <li>
        <div>
          <Link to="/">Live Scores</Link>
          </div>
        </li>
        <li>
        <div>
          <Link to="/news">News</Link>
          </div>
        </li>
        <li>
          <div>
          <Link to="/teams">Teams</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
