import React from 'react';

import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import About from './../components/About';
import Proyectos from './Proyectos';

class Home extends React.Component {

  render() {
    let props = this.props;

    return(
      <div>
        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <Profile lang = { props.lang } />
        <br/>
        <About lang = { props.lang } />
        <br/>
        <Proyectos lang = { props.lang } />
    </div>
    );
  }
}

export default Home;
