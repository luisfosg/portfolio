import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navigation.scss";

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      clasesMenu: "enlaces circulo",
      activarMenu: true,
    };

    this.activarMenu = this.activarMenu.bind(this);
  }

  activarMenu() {
    let estado = this.state.activarMenu;
    estado = !estado;

    this.setState({activarMenu: estado});

    if(this.state.activarMenu){
      this.setState({clasesMenu: "enlaces circulo circuloactive"});
    } else {
      this.setState({clasesMenu: "enlaces circulo"});
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="button-nav dark" id="float-button" onClick={ this.activarMenu }>
          </div>
          <ul className={ this.state.clasesMenu } >
            <li><Link to="/" className="enlace">Inicio</Link></li>
            <li><a href="/#proyect" className="enlace">Proyect</a></li>
            <li><a href="/#about" className="enlace">About</a></li>
            <li><Link to="/contact" className="enlace">Contact</Link></li>
            <br/>
            <li><a href="/" className="enlace">Language</a></li>
            <li><a href="/" className="enlace">Dark</a></li>
            <br/>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
