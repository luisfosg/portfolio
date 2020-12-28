import "../styles/Footer.scss";

function Footer(props) {
  if(props.lang.proyect){
    return (
      <div>
        pie de pagina
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
