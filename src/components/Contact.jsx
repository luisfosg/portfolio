import "../styles/Contact.scss";

function Contact(props) {
  if(props.lang.menu){
    return (
      <header className="container-center">
        <div className="container">
          <div className="contact-title text-center">
            Contact Me
          </div>
          <div>
            <label>Name</label><br/>
            <input className="form-control" type="text" name="name" id="name" placeholder="Name"/>
          </div>
          <div>
            <label>Email</label><br/>
            <input className="form-control" type="email" name="email" id="email" placeholder="Email"/>
          </div>
          <div>
            <label>Message</label><br/>
            <textarea className="form-control-textarea" name="description" id="description" placeholder="Description"></textarea>
          </div>
          <div className="text-center">
            <button>Send</button>
          </div>
        </div>
      </header>
    );
  }

  return (
      <header>
        <div>
          Contact
        </div>
      </header>
  );
}

export default Contact;
