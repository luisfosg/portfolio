import Proyecto from './../components/Proyecto';

import "../styles/Proyectos.scss";

function Proyectos(props) {
  return (
    <div id="proyect">
      <header>
        <Proyecto leng = { props.leng } />
        <Proyecto leng = { props.leng } />
        <Proyecto leng = { props.leng } />
        <Proyecto leng = { props.leng } />
        <Proyecto leng = { props.leng } />
        <Proyecto leng = { props.leng } />
      </header>
    </div>
  );
}

export default Proyectos;
