import './App.css'
import { Link } from "react-router-dom";


const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
          <li>
            <Link to="spinach">spinach</Link>
          </li>
          <li>
            <Link to="popeye">Popeye</Link>
          </li>
          <li>
            <Link to="mario">Mario</Link>
          </li>
          <li>
            <Link to="olive">Olive Oil</Link>
          </li>
          <li>
            <Link to="donkeykong">DonkeyKong</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default App;
