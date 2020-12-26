import "../styles/Contact.scss";

function Contact(props) {
  if(props.lang.menu){
    return (
      <header>
        <div className="text-center">
          <div>
            Contact Me
          </div>
          <div>
            <label>Name</label><br/>
            <input type="text" name="name" id="name" placeholder="Name"/>
          </div>
          <div>
            <label>Email</label><br/>
            <input type="email" name="email" id="email" placeholder="Email"/>
          </div>
          <div>
            <label>Message</label><br/>
            <textarea name="description" id="description" placeholder="Description"></textarea>
          </div>
          <div>
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
