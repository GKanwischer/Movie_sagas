import { HashRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import './App.css';

// Component imports
import Home from '../Home/Home';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import MovieForm from '../MovieForm/MovieForm';

function App() {

  const Header = () => {

    return (
      <>
        <h1>The Movies Saga!</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Collection</NavLink>
          <NavLink to="/movie_form">Add Movie</NavLink>
        </nav></>
    )
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies/details/:id" >
            <Details />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/movie_form">
            <MovieForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
