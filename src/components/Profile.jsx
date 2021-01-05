import "../styles/Profile.scss";

function Profile(props) {
  if(props.lang.menu){
    let img = "https://avatars0.githubusercontent.com/u/52636768?s=460&u=408f631763488a459ed343e35efbe2f97a013a81&v=4";
    return (
      <div className="cuadroPerfil" id="perfil">
        <div className="column-1 text-center animate__animated animate__fadeInLeftBig">
          <div className="espacio">
            Luis F. Osorio <br/><br/>
            Programming is art 🤯. I am a programming student looking to learn something new every day.
          </div>
          <div className="espacio">
            <br/><br/><br/>
            <ul className="enlacesInteres">
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-2 animate__animated animate__fadeInDown">
          <img className="fotoPerfil" src={ img } alt=""/>
        </div>
      </div>
    );

  }
  return (
    <div>
    </div>
  );
}

export default Profile;
