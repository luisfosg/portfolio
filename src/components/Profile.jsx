import "../styles/Profile.scss";

function Profile(props) {
  if(props.lang.menu){
    let img = "https://avatars0.githubusercontent.com/u/52636768?s=460&u=408f631763488a459ed343e35efbe2f97a013a81&v=4";
    return (
      <div className="cuadroPerfil" id="perfil">
        <div className="column-1 text-center">
          <div className="espacio">
            Luis F. Osorio <br/><br/>
            Programming is art 🤯. I am a programming student looking to learn something new every day.
          </div>
          <div className="espacio">
            <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG" className="enlacetexto icon">
              <i className="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="mailto:luisfosg@gmail.com" className="enlacetexto icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="column-2">
          <img className="foto" src={ img } alt=""/>
        </div>
      </div>
    );

  }
  return (
    <div>
      Luis F. Osorio
    </div>
  );
}

export default Profile;
