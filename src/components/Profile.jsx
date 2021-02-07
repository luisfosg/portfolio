import "../styles/Profile.scss";

function Profile(props) {
  if(props.lang.menu){
    let img = "https://avatars2.githubusercontent.com/u/52636768?s=460&u=4fc943596bd723d31f1f943942dd2e02a0f09983&v=4";
    return (
      <div className="cuadroPerfil paddperc" id="perfil">
        <div className="column-1 text-center paddperc animate__animated animate__fadeInLeftBig">
          <div className="espacio paddperc">
            Luis F. Osorio <br/><br/>
            { props.lang.profile.about }
          </div>
          <div className="espacio paddperc">
            <div className="enlacesOcultos paddperc">
              <br/>
              <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG" className="enlacetexto icon">
                <i className="fab fa-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="mailto:luisfosg@gmail.com" className="enlacetexto icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <ul className="enlacesInteres paddperc">
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-github"></span>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="mailto:luisfosg@gmail.com">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fas fa-envelope"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-2 paddperc animate__animated animate__fadeInDown">
          <img className="fotoPerfil paddperc" src={ img } alt=""/>
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
