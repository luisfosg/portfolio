import "../styles/Contact.scss";

function Contact(props) {
  if(props.lang.menu){
    return (
      <main className="container-center" id="contact">
        <div className="container">
          <div className="contact-title text-center">
            Contact Me
          </div>
          <div>
            <label>Name</label><br/>
            <input className="form-control border" type="text" name="name" id="name" placeholder="Name"/>
          </div>
          <div>
            <label>Email</label><br/>
            <input className="form-control border" type="email" name="email" id="email" placeholder="Email"/>
          </div>
          <div>
            <label>Message</label><br/>
            <textarea rows="10" className="form-control-textarea" name="description" id="description" placeholder="Description"></textarea>
          </div><br/>
          <div className="text-center border">
            <button className="button">Send</button>
          </div>
          <br/>
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
