import "../styles/Proyecto.scss";

function Proyecto(props) {
  if(props.lang.proyect){
    return (
      <div className="item">
        <img src={ props.img } alt="Img"/>
        { props.lang.proyect.text }
      </div>
    )
  }

  return (
    <div>
      Proyecto
    </div>
  );
}

export default Proyecto;
