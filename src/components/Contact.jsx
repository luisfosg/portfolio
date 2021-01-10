import "../styles/Contact.scss";

function Contact(props) {
  if(props.lang.menu){
    let img = "https://avatars2.githubusercontent.com/u/52636768?s=460&u=4fc943596bd723d31f1f943942dd2e02a0f09983&v=4";
    return (
      <main className="container-center">
        <div className="container">
          <div className="imagen animate__animated animate__slideInLeft">
            <img className="imagenContact" src={ img } alt=""/>
          </div>
          <div className="formulario animate__animated animate__slideInRight">
            <div className="contact-title text-center">
              <h2>Drop me a line…</h2>
            </div>
            <div>
              <label className="font-px" >Name</label><br/>
              <input className="form-control name-control border" type="text" name="name" id="name" placeholder="Your Name"/>
            </div>
            <br/>
            <div>
              <label className="font-px" >Email</label><br/>
              <input className="form-control email-control border" type="email" name="email" id="email" placeholder="your@account.com"/>
            </div>
            <br/>
            <div>
              <label className="font-px" >Message</label><br/>
              <textarea rows="10" className="form-control-textarea" name="description" id="description" placeholder="Hi Luis,"></textarea>
            </div><br/>
            <div className="text-center border">
              <div className="botonPrueba">
                <button className="transparent button">
                  <p>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">Send</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
      <header>
      </header>
  );
}

export default Contact;
