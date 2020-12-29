import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navigation.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* Para Activar el Menu despegable */
      clasesMenu: "enlaces circulo",
      activarMenu: true,

      /* Para Cambiar la apariencia de el Modo Dark */
      classDark: "far fa-moon",
    };

    this.activarMenu = this.activarMenu.bind(this);
    this.activarDark = this.activarDark.bind(this);
  }

  componentDidMount(){
    this.loadDark();
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

  activarDark() {
    const body = document.getElementById('body');
    if(body.classList.toggle("dark")){
      this.saveDark("true");
      this.setState({ classDark: "far fa-sun" });
    } else {
      this.saveDark("false");
      this.setState({ classDark: "far fa-moon" });
    }
  }

  async loadDark() {
    const dark = localStorage.getItem("darkmode");

    if(!dark){
      this.saveDark("false");
      this.setState({ classDark: "far fa-moon" });
    } else if(dark === "true") {
      const body = document.getElementById('body');
      body.classList.add("dark");
      this.setState({ classDark: "far fa-sun" });
    } else {
      this.saveDark("false");
      this.setState({ classDark: "far fa-moon" });
    }
  }

  saveDark(dark){
    localStorage.setItem("darkmode", dark);
  }

  render() {
    let props = this.props;
    if(props.lang.menu){
      return (
        <div>
          <nav>

            <div className="button-nav" id="float-button" onClick={ this.activarMenu }>
            </div>

            <ul className={ this.state.clasesMenu } >
              <li>
                <Link to="/" className="enlace">
                   { props.lang.menu.inicio } <i className="fas fa-address-book"></i>
                </Link>
              </li>
              <li>
                <a href="/#about" className="enlace">
                { props.lang.menu.about } <i className="fas fa-address-card"></i>
                </a>
              </li>
              <li>
                <a href="/#proyect" className="enlace">
                { props.lang.menu.proyect } <i className="fas fa-briefcase"></i>
                </a>
              </li>
              <li>
                <Link to="/contact#contact" className="enlace">
                { props.lang.menu.contact } <i className="far fa-envelope"></i>
                </Link>
              </li>

              <br/>

              <li className="mode" onClick={ props.cambiarLenguaje }>
              { props.lang.menu.lenguage } <i className="fas fa-language"></i>
              </li>

              <li className="mode" onClick={ this.activarDark }>
                <i className={ this.state.classDark }></i>
              </li>

              <br/>
            </ul>

          </nav>
        </div>
      );
    }
    return(<div>Cargando</div>);
  }
}

export default Navigation;
