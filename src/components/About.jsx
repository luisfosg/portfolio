import "../styles/About.scss";

function About(props) {
  if (props.lang.about) {
    return (
      <div className="imagenAbout">
        <div className="arriba paddperc"></div>
        <div className="contenedor paddperc">
          <div className="text-center paddperc about-margin ocultar" id="about">
            <h1>{props.lang.about.text}</h1>
            <div className="cuadroAbout paddperc">
              {props.lang.about.description}
            </div>
          </div>
          <div className="text-center paddperc cuadroSkill ocultar">
            <h3>{props.lang.about.skillTitles}</h3>
            <div className="skill">
              (Imagenes o texto.. (Por definirse))
            </div>
          </div>
        </div>
        <div className="abajo paddperc"></div>
      </div>
    );
  }

  return <div id="about"></div>;
}

export default About;
