// react imports
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import './App.css';

// Component imports
import Header from '../Header/Header';
import Home from '../Home/Home';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import MovieForm from '../MovieForm/MovieForm';

function App() {
  // instantiation of useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

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
      <p className="copyright">&copy; 2023 Garret Kanwischer - Jolitz cohort, EDA. All rights reserved.</p>
    </div>
  );
}


export default App;
