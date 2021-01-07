import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

import Home from "./Home";
import ContactPage from "./ContactPage";

import "animate.css";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lang: [],
      loader: true,
      activarIdioma: true,
    };

    this.cambiarLenguaje = this.cambiarLenguaje.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    this.loadLeng();
    this.setState({ loader: false });
    window.addEventListener("scroll", this.scroll);
  }

  scroll() {
    var animacion = document.querySelectorAll(".ocultar");
    let tamPantalla = window.innerHeight - 50;

    for (let i = 0; i < animacion.length; i++) {
      let alturaAnimado = animacion[i].getBoundingClientRect().top;
      if (alturaAnimado < tamPantalla) {
        animacion[i].style.opacity = 1;
        animacion[i].classList.add("animar");
      }
    }
  }

  async cambiarLenguaje() {
    let estado = this.state.activarIdioma;
    estado = !estado;

    this.setState({ activarIdioma: estado });

    if (this.state.activarIdioma) {
      const Search = await fetch("/language/ES-es.json");
      const lang = await Search.json();

      this.setState({ lang: lang });

      document.documentElement.setAttribute("lang", "es");
      this.saveLeng("es");
    } else {
      const Search = await fetch("/language/EN-en.json");
      const lang = await Search.json();

      this.setState({ lang: lang });
      document.documentElement.setAttribute("lang", "en");
      this.saveLeng("en");
    }
  }

  async loadLeng() {
    const leng = localStorage.getItem("lenguage");
    if (leng) {
      if (leng === "es") {
        document.documentElement.setAttribute("lang", "es");
        const Search = await fetch("/language/ES-es.json");
        var lang = await Search.json();

        this.setState({ activarIdioma: false });
        this.saveLeng("es");
      } else {
        const Search = await fetch("/language/EN-en.json");
        lang = await Search.json();
        this.saveLeng("en");
      }
    } else {
      const Search = await fetch("/language/EN-en.json");
      lang = await Search.json();

      this.saveLeng("en");
    }
    this.setState({ lang: lang });
  }

  saveLeng(leng) {
    localStorage.setItem("lenguage", leng);
  }

  render() {
    if (this.state.loader) {
      return <div>Cargando... ;D</div>;
    } else {
      return (
          <Router>
            <Switch>
              <Route path="/contact" exact>
                <ContactPage lang={this.state.lang} cambiarLenguaje={this.cambiarLenguaje} />
              </Route>

              <Route path="/" exact>
                <Home lang={this.state.lang} cambiarLenguaje={this.cambiarLenguaje} />
              </Route>
            </Switch>
          </Router>
      );
    }
  }
}

export default App;
