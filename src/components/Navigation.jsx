import { Link } from 'react-router-dom'

import "../styles/Navigation.scss";

function Navigation() {
  return (
    <div>
      <nav>
        <div className="button-nav dark" id="float-button">
        </div>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><a href="/#proyect">Proyect</a></li>
          <li><a href="/#about">About</a></li>
          <li><Link to="/contact">Contact</Link></li>
          <br/>
          <li>Language</li>
          <li>Dark</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
