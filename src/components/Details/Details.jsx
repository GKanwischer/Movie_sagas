// react imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// material ui import
import { Grid, Container } from '@material-ui/core'
// css import
import './Details.css';

// component that handles displaying the selected movie's details
export default function Details() {
    // instantiation of useHistory, useDispatch, and useParams
    const history = useHistory();
    const dispatch = useDispatch();
    let params = useParams();

    // variable to hold the id value coming through the url params
    let movieId = params.id;

    // variable to hold the details of the selected movie in the store
    let selectedMovie = useSelector(store => store.selectedMovie);

    // logs to verify correct values
    console.log('params: ', params);
    console.log('selected movie: ', selectedMovie);

    useEffect(() => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieId
        })
    }, [])

    // conditional rendering for if the id doesn't match with one in the database
    if (selectedMovie.length === 0) return <h2>Invalid Movie ID</h2>;

    return (
        <div>
            <Container className="details-container">
                <Grid container spacing={4}>
                    <Grid item sm={6}>
                        <img src={selectedMovie.poster} />
                    </Grid>
                    <Grid item className="movie-details" sm={6}>
                        <h4>Genres:</h4>
                        <p>{selectedMovie.genre_names}</p>
                        <h4>Movie Description:</h4>
                        <p>{selectedMovie.description}</p>
                    </Grid>
                </Grid>
                <button onClick={() => history.push('/movies')}>Go Back</button>
            </Container>
        </div>
    )
}
