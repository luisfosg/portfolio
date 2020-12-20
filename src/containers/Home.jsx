import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import About from './../components/About';
import Proyectos from './Proyectos';

function Home() {
  return (
    <div>
      <Navigation/>
      <About/>
      <Profile/>
      <Proyectos/>
    </div>
  );
}

export default Home;
