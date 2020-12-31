import "../styles/Proyecto.scss";

function Proyecto(props) {
  if(props.lang.proyect){
    return (
      <div className="item ocultar">
        <img src={ props.img } alt="Img"/>
        { props.lang.proyect.text }
      </div>
    )
  }

  return (
    <div>
    </div>
  );
}

export default Proyecto;
