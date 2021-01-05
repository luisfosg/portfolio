import Proyecto from './../components/Proyecto';

import "../styles/Proyectos.scss";

function Proyectos(props) {
  let img = "http://placekitten.com/1000/500";
  let number = [1,2,3,4,5,6]
  return (
    <div id="proyect">
      <main>
        <div className="cuadroProyecto">
        { number.map((proy)=> <Proyecto key={ proy } lang = { props.lang } img = { img } />) }
        </div>
      </main>
    </div>
  );
}

export default Proyectos;
