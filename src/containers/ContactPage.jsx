import Navigation from './../components/Navigation';
import Contact from './../components/Contact';
import Footer from './../components/Footer';

function ContactPage(props) {
  return (
    <div>

        <div className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>

        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <br/>
        <Contact lang = { props.lang }/>
        <br/>
        <Footer  lang = { props.lang }/>
    </div>
  );
}

export default ContactPage;
