import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import Contact from './../components/Contact';

function ContactPage(props) {
  return (
    <div>
        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <Profile lang = { props.lang }/>
        <Contact lang = { props.lang }/>
    </div>
  );
}

export default ContactPage;
