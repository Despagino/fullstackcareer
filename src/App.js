import UserComponents from './components/UserComponents';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/userslist' component={UserComponents} />
        <Route path='/about' component={About} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
