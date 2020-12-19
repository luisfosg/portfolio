import { Link } from 'react-router-dom'

import "../styles/Navigation.scss";

function Navigation() {
  return (
    <div>
      <div className="float-button dark" id="float-button">
      </div>
      <header>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><a href="/#proyect">Proyect</a></li>
          <li><a href="/#about">About</a></li>
          <li><Link to="/contact">Contact</Link></li>
          <br/>
          <li>Language</li>
          <li>Dark</li>
        </ul>
      </header>
    </div>
  );
}

export default Navigation;
