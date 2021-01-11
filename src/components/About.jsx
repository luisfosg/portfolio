import "../styles/About.scss";

function About(props) {
  if (props.lang.about) {
    return (
      <div className="imagenAbout">
        <div className="arriba"></div>
        <div className="contenedor">
          <div className="text-center about-margin ocultar" id="about">
            <h1>{props.lang.about.text}</h1>
            <div className="cuadroAbout">
              Hello, I am a Colombian computer engineering student, since the fourth semester of my career I began to study little by little computer technologies that help me in my day to day practice.
            </div>
          </div>
          <div className="text-center cuadroSkill ocultar">
            <h3>Skill & Tools</h3>
          </div>
        </div>
        <div className="abajo"></div>
      </div>
    );
  }

  return <div id="about"></div>;
}

export default About;
