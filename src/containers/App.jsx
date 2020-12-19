import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';
import ContactPage from './ContactPage';

import "../styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/contact" exact>
          <ContactPage/>
        </Route>

        <Route path="/" exact>
          <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
