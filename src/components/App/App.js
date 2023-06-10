import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/movies/details/:id" >
            <Details />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          {/* Add Movie page */}
        </Switch>
      </Router>
    </div>
  );
}


export default App;
