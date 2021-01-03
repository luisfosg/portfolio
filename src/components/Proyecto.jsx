import "../styles/Proyecto.scss";

function Proyecto(props) {
  if(props.lang.proyect){
    return (
      <div className="width">
        <figure className="imghvr-hinge-right item text-center ocultar">
          <img className="imagenProyecto" src={ props.img } alt="Img"/>
            <figcaption>
              { props.lang.proyect.text }
            </figcaption>
        </figure>
      </div>
    )
  }

  return (
    <div>
    </div>
  );
}

export default Proyecto;
