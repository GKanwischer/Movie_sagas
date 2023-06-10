import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export default function* _rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMoviesSaga);
    yield takeEvery('FETCH_GENRES', fetchingAllGenresSaga);
    yield takeEvery('FETCH_MOVIE_DETAILS',fetchSingleMovieSaga);
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

function* fetchSingleMovieSaga(action){
    try{
        const response = yield axios.get(`/api/movies/details/${action.paylaod}`)
        console.log('Getting movie at id: ', response);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: response})
    } catch {
        console.log('error getting selected movie');
    }
}