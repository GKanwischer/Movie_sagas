import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    // const [clickedMovie, setClickedMovie] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    // console.log('movies: ', movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' })
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    function handleMovieClick(movie) {
        history.push(`/movies/details/${movie.id}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;

        // dispatch({
        //     type: 'FETCH_MOVIE_DETAILS',
        //     payload: clickedMovie.id
        // })
        // history.push(`/movies/details/:${clickedMovie.id}`)