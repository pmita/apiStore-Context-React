import './styles/App.scss'; //importing our css styling
//importing our components
import Navigation from './components/Navigation';
import Home from './pages/Home'; // Home page compoent
import Products from './pages/Products'; // Products page component
import Cart from './pages/Cart'; //Cart page component
//import everything react router related
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
