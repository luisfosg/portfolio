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
              Hello, I am a Colombian computer engineering student, since the fourth semester of my career I began to study little by little computer technologies that help me in my day to day practice.
            </div>
          </div>
          <div className="text-center paddperc cuadroSkill ocultar">
            <h3>Skill & Tools</h3>
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
