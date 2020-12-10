import { Link } from 'react-router-dom'

import "../styles/Navigation.scss";

function Navigation() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li>Proyect</li>
          <li>About</li>
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
