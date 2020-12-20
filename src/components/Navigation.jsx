import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navigation.scss";

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      idioma: [],
      activarIdioma: true,

      /* Para Activar el Menu despegable */
      clasesMenu: "enlaces circulo",
      activarMenu: true,

      /* Para Cambiar la apariencia de el Modo Dark */
      titleDark: "Dark",
      classDark: "far fa-moon",
    };

    this.activarMenu = this.activarMenu.bind(this);
    this.activarDark = this.activarDark.bind(this);
    this.cambiarLenguaje = this.cambiarLenguaje.bind(this);
  }

  async componentDidMount() {
    this.loadDark();

    const Search = await fetch("/language/EN-en.json");
    const lang = await Search.json();

    this.setState({idioma: lang});
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

  async cambiarLenguaje(){
    let estado = this.state.activarIdioma;
    estado = !estado;

    this.setState({activarIdioma: estado});

    if(this.state.activarIdioma){
      const Search = await fetch("/language/ES-es.json");
      const lang = await Search.json();

      this.setState({idioma: lang});
    } else {
      const Search = await fetch("/language/EN-en.json");
      const lang = await Search.json();

      this.setState({idioma: lang});
    }
  }

  activarDark() {
    const body = document.getElementById('body');
    if(body.classList.toggle("dark")){
      this.saveDark("true");
      this.setState({ titleDark: "Light", classDark: "far fa-sun" });
    } else {
      this.saveDark("false");
      this.setState({ titleDark: "Dark", classDark: "far fa-moon" });
    }
  }

  loadDark() {
    const dark = localStorage.getItem("darkmode");

    if(!dark){
      this.saveDark("false");
      this.setState({ titleDark: "Dark", classDark: "far fa-moon" });
    } else if(dark === "true") {
      const body = document.getElementById('body');
      body.classList.add("dark");
      this.setState({ titleDark: "Light", classDark: "far fa-sun" });
    }
  }

  saveDark(dark){
    localStorage.setItem("darkmode", dark);
  }

  render() {
    return (
      <div>
        <nav>

          <div className="button-nav" id="float-button" onClick={ this.activarMenu }>
          </div>

          <ul className={ this.state.clasesMenu } >
            <li>
              <Link to="/" className="enlace">
                { this.state.idioma.inicio } <i className="fas fa-address-book"></i>
              </Link>
            </li>
            <li>
              <a href="/#about" className="enlace">
                About <i className="fas fa-address-card"></i>
              </a>
            </li>
            <li>
              <a href="/#proyect" className="enlace">
                Proyect <i className="fas fa-briefcase"></i>
              </a>
            </li>
            <li>
              <Link to="/contact" className="enlace">
                Contact <i className="far fa-envelope"></i>
              </Link>
            </li>

            <br/>

            <li className="mode" onClick={ this.cambiarLenguaje }>
              { this.state.idioma.lenguaje } <i className="fas fa-language"></i>
            </li>

            <li className="mode" onClick={ this.activarDark }>
              { this.state.titleDark } <i className={ this.state.classDark }></i>
            </li>

            <br/>
          </ul>

        </nav>
      </div>
    );
  }
}

export default Navigation;
