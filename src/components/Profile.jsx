import "../styles/Profile.scss";

function Profile(props) {
  if(props.lang.menu){

    return (
      <div className="text-center">
        Luis F. Osorio <br/>
        <a target="_blank" rel="noreferrer" href="https://github.com/LuisFOsG" className="enlace github">
          <i className="fab fa-github"></i>
        </a>
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
