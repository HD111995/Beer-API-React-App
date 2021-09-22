
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'
import BeerList from './components/BeerList'
import BeerItem from "./components/BeerItem";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <Router >
      <Switch>
        <Route path='/' exact>
      <HomePage/>
      </Route>
      <Route path='/randombeer' component={RandomBeer}/>
      <Route path='/allbeer' exact>
      <BeerList/>
      </Route>
      <Route path='/beeritem/:id' component={BeerItem}/>
      
      </Switch>
    </Router>
  );
}

export default App;
