import "../styles/Profile.scss";

function Profile(props) {
  if(props.lang.menu){
    let img = "https://avatars0.githubusercontent.com/u/52636768?s=460&u=408f631763488a459ed343e35efbe2f97a013a81&v=4";
    return (
      <div className="cuadroPerfil">
        <div className="colum-1 text-center">
          Luis F. Osorio <br/>
          <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG" className="enlacetexto github">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="colum-2">
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
