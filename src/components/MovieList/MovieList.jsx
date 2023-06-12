// react imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui import
import { Grid, Container } from '@material-ui/core'
// component import
import ListItem from './ListItem';
// css import
import './MovieList.css'

// component to handle the display of the all movies in collection that exist in the database
export default function MovieList() {
    // instantiation of useHistory and useDispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // variable to hold the movies in the store
    const movies = useSelector(store => store.movies);
    // use effect to refresh the list of movies from the database
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' })
    }, []);

    // function that sends us to the correct details page based on the clicked on movies id
    function handleMovieClick(movie) {
        history.push(`/movies/details/${movie.id}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Container className="movies">
                <Grid container spacing={6}>
                    {movies.map(movie => {
                        return (
                            <Grid item
                                key={movie.id}
                                onClick={() => handleMovieClick(movie)}
                                xs={6} md={4} lg={3}>
                                <ListItem movie={movie} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </main>
    );
}
