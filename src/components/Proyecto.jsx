import "../styles/Proyecto.scss";

function Proyecto(props) {
  if(props.lang.proyect){
    return (
      <div className="item text-center ocultar">
        <figure class="imghvr-hinge-right">
          <img src={ props.img } alt="Img"/>
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
