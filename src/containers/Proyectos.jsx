import Proyecto from './../components/Proyecto';

import "../styles/Proyectos.scss";

function Proyectos(props) {
  return (
    <div id="proyect">
      <header>
        <div className="cuadroProyecto">
          <Proyecto lang = { props.lang } />
          <Proyecto lang = { props.lang } />
          <Proyecto lang = { props.lang } />
          <Proyecto lang = { props.lang } />
          <Proyecto lang = { props.lang } />
          <Proyecto lang = { props.lang } />
        </div>
      </header>
    </div>
  );
}

export default Proyectos;
