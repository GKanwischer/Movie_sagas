import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core'
import './Details.css';


export default function Details() {
    const dispatch = useDispatch();
    let params = useParams();
    const history = useHistory();
    let selectedMovie = useSelector(store => store.selectedMovie);
    let movieId = params.id; // :movieId is set up in App.js

    console.log('params: ', params);
    console.log('selected movie: ', selectedMovie);



    useEffect(() => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieId
        })
    }, [])

    if (selectedMovie.length === 0) return <h2>Invalid Movie ID</h2>;

    return (
        <div>
            {/* <h3 className="details-title">{selectedMovie.title}</h3>
            <img src={selectedMovie.poster} />
            <div className='movie-details'>
                <h4>Genres: {selectedMovie.genre_names}</h4>
                <h4>Movie Description: {selectedMovie.description}</h4>
            </div>
            <div className='back-btn'>
                <button onClick={() => history.push('/movies')}>Go Back</button>
            </div> */}

            <Container className="details-container">
                <Grid container spacing={4}>
                    <Grid item sm={6}>
                        <img src={selectedMovie.poster} />
                    </Grid>
                    {/* <Grid item sm={1}></Grid> */}
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
