import "../styles/About.scss";

function About(props) {
  if(props.lang.about){
    const img = "https://enlacetelevision.com/wp-content/uploads/2020/06/ejercito-Recuperado-3-1140x641.jpg";
    return (
    <div className="text-center ocultar" id="about">
      <div className="cuadroAbout">
        <div className="cuadro1">
          <img className="foto" src={ img } alt=""/>
        </div>
        <div className="cuadro2">
          { props.lang.about.text } <br/><br/>
          Hello, I am a Colombian computer engineering student, since the fourth semester of my career I began to study little by little computer technologies that help me in my day to day practice. <br/><br/>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div id="about">
      <section>
      </section>
    </div>
  );
}

export default About;
