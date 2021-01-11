import "../styles/GetInTouch.scss";

function GetInTouch(props) {
  if(props.lang.proyect){
    return (
      <div className="text-center paddperc centrar">
        <div className="get-in-touch paddperc">

            <a href="/contact">
                <svg className="icon-arrow before">
                    <use href="#arrow" />
                </svg>
                <span className="label">Get In Touch</span>
                <svg className="icon-arrow after">
                    <use href="#arrow" />
                </svg>
            </a>

            <svg className="d-none paddperc">
                <defs>
                    <symbol id="arrow" viewBox="0 0 35 15">
                    <title>Arrow</title>
                    <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
                    </symbol>
                </defs>
            </svg>

        </div>
      </div>
    )
  }

  return (
    <div>
    </div>
  );
}

export default GetInTouch;
