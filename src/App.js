import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Redirect from './Redirect';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/l/:code" component={Redirect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
