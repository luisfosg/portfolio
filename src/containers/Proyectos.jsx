import Proyecto from './../components/Proyecto';

import "../styles/Proyectos.scss";

function Proyectos(props) {
  return (
    <div id="proyect">
      <header>
        <Proyecto lang = { props.lang } />
        <Proyecto lang = { props.lang } />
        <Proyecto lang = { props.lang } />
        <Proyecto lang = { props.lang } />
        <Proyecto lang = { props.lang } />
        <Proyecto lang = { props.lang } />
      </header>
    </div>
  );
}

export default Proyectos;
