import "../styles/About.scss";

function About(props) {
  if(props.lang.about){
    return (
      <div id="about">
        <header>
          { props.lang.about.text }
        </header>
      </div>
    );
  }
  return (
    <div id="about">
      About
    </div>
  );
}

export default About;

/* Colocar Experiencia Usando n Herramientas */
