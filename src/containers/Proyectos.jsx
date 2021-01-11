import Proyecto from './../components/Proyecto';

import "../styles/Proyectos.scss";

function Proyectos(props) {
  let img = "http://placekitten.com/2000/1000";
  let number = [1,2,3,4,5,6]
  if(props.lang.proyect){
    return (
      <div className="paddperc" id="proyect">
        <h1 className="paddperc">My Proyects</h1>
        <br/>
        <main className="paddperc">
          <div className="cuadroProyecto paddperc">
          { number.map((proy)=> <Proyecto key={ proy } lang = { props.lang } img = { img } />) }
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
    </div>
  );
}

export default Proyectos;
