import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export default function* _rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMoviesSaga);
    yield takeEvery('FETCH_GENRES', fetchingAllGenresSaga);
    yield takeEvery('FETCH_MOVIE_DETAILS',fetchSingleMovieSaga);
    yield takeEvery('ADD_MOVIE', addNewMovieSaga);
}

function* fetchAllMoviesSaga() {  // Saga for GETing all of the Movies from the db
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('error getting all movies');
    }
}

function* fetchingAllGenresSaga(){  // Saga for GETing all of the Genres from the db
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data})
    } catch {
        console.log('error getting all genres');
    }
}

function* fetchSingleMovieSaga(action){ // Saga for getting the details of a single movie
    try{
        const response = yield axios.get(`/api/movie/${action.payload}`)
        console.log(`Getting movie at id: ${action.payload}`, response.data);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: response.data})
    } catch {
        console.log('error getting selected movie at id:', action.payload);
    }
}

function* addNewMovieSaga(action){ // Saga for adding a movie to the database
    try {
        console.log("adding the movie:", action.payload);
    
        yield axios.post("/api/movie", action.payload);
        console.log("added data successfully, refreshing data");
        yield put({ type: "FETCH_MOVIES" });
      } catch (error) {
        console.log("error posting a new movie", error);
      }
}
