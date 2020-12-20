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

          <div className="button-nav" id="float-button" onClick={ this.activarMenu }>
          </div>

          <ul className={ this.state.clasesMenu } >
            <li><Link to="/" className="enlace">Home <i className="fas fa-address-book"></i></Link></li>
            <li><a href="/#about" className="enlace">About <i className="fas fa-address-card"></i></a></li>
            <li><a href="/#proyect" className="enlace">Proyect <i className="fas fa-briefcase"></i></a></li>
            <li><Link to="/contact" className="enlace">Contact <i className="far fa-envelope"></i></Link></li>
            <br/>
            <li><a href="/" className="enlace">Language <i className="fas fa-language"></i></a></li>
            <li><a href="/" className="enlace">Dark <i className="far fa-moon"></i></a></li>
            <br/>
          </ul>

        </nav>
      </div>
    );
  }
}

export default Navigation;
