import "../styles/Footer.scss";

function Footer(props) {
  if(props.lang.proyect){
    return (
      <div className="text-center">
        Luis Osorio 2020
      </div>
    )
  }

  return (
    <div>
      pie de pagina
    </div>
  );
}

export default Footer;
