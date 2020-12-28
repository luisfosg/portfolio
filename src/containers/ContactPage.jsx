import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import Contact from './../components/Contact';
import Footer from './../components/Footer';

function ContactPage(props) {
  return (
    <div>
        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <br/><br/><br/><br/>
        <Profile lang = { props.lang }/>
        <br/><br/>
        <Contact lang = { props.lang }/>
        <br/>
        <Footer  lang = { props.lang }/>
    </div>
  );
}

export default ContactPage;
