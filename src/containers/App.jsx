import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './../components/Navigation';
import Contact from './../components/Contact';

import "../styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact" exact>
          <Navigation/>
          <Contact/>
        </Route>
        <Route path="/" exact>
          <Navigation/>
          Luis F. Osorio
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
