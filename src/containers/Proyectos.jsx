import Proyecto from './../components/Proyecto';

import "../styles/Proyectos.scss";

function Proyectos(props) {
  let img = "http://placekitten.com/2000/1000";
  let number = [1,2,3,4,5,6]
  return (
    <div id="proyect">
      <h1>My Proyects</h1>
      <br/>
      <main>
        <div className="cuadroProyecto">
        { number.map((proy)=> <Proyecto key={ proy } lang = { props.lang } img = { img } />) }
        </div>
      </main>
    </div>
  );
}

export default Proyectos;
