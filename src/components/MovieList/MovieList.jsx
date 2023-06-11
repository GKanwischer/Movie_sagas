import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid , Container } from '@material-ui/core'
import ListItem from './ListItem';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

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
            <Container className="movies">
                <Grid container spacing={3}>
                    {movies.map(movie => {
                        return (
                            <Grid item
                                key={movie.id}
                                onClick={() => handleMovieClick(movie)}
                                xs={6} md={4} lg={2}>
                                    <ListItem movie={movie} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </main>

    );
}

export default MovieList;
