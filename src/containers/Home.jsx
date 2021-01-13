import React from 'react';

import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import About from './../components/About';
import Proyectos from './Proyectos';
import GetInTouch from './../components/GetInTouch';

class Home extends React.Component {

  render() {
    let props = this.props;

    return(
      <div>
        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <br/><br/>
        <Profile lang = { props.lang } />
        <About lang = { props.lang } />
        <br/><br/>
        <Proyectos lang = { props.lang } />
        <br/><br/>
        <GetInTouch lang = { props.lang } />
        <br/>
    </div>
    );
  }
}

export default Home;
