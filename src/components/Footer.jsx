import "../styles/Footer.scss";

function Footer(props) {
  if(props.lang.proyect){
    return (
      <div className="background-footer">
        Luis Osorio - { props.lang.proyect.year }
      </div>
    )
  }

  return (
    <div>
    </div>
  );
}

export default Footer;
