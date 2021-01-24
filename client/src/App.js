import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/orders/:id' component={Order}/>
      </Router>
    </div>
  );
}

export default App;
