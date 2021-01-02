import "../styles/Contact.scss";

function Contact(props) {
  if(props.lang.menu){
    let img = "https://avatars0.githubusercontent.com/u/52636768?s=460&u=408f631763488a459ed343e35efbe2f97a013a81&v=4";
    return (
      <main className="container-center">
        <div className="container">
          <div className="imagen animate__animated animate__slideInLeft">
            <img className="imagenContact" src={ img } alt=""/>
          </div>
          <div className="formulario animate__animated animate__slideInRight">
            <div className="contact-title text-center">
              Contact Me
            </div>
            <div>
              <label>Name</label><br/>
              <input className="form-control border" type="text" name="name" id="name" placeholder="Name"/>
            </div>
            <br/>
            <div>
              <label>Email</label><br/>
              <input className="form-control border" type="email" name="email" id="email" placeholder="Email"/>
            </div>
            <br/>
            <div>
              <label>Message</label><br/>
              <textarea rows="10" className="form-control-textarea" name="description" id="description" placeholder="Description"></textarea>
            </div><br/>
            <div className="text-center border">
              <button className="button">Send</button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
      <header>
        <div>
        </div>
      </header>
  );
}

export default Contact;
