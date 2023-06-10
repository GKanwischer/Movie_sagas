import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function Details(){
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

    if(selectedMovie.length === 0) return <h2>Invalid Movie ID</h2>;

    return(
        <div>
            <h3>Movie Title: {selectedMovie.title}</h3>
            <img src={selectedMovie.poster}/>
            <div className='movie-details'>
                <h4>Genres: {selectedMovie.genre_names}</h4>
                <h4>Movie Description: {selectedMovie.description}</h4>
            </div>
            <div className='back-btn'>
                <button onClick={() => history.push('/movies')}>Go Back</button>
            </div>

        </div>
    )
}
//    return (
//       <>
//          <h1>Book Details</h1>
//          <h2>{book.title}</h2>
//          <p>Written by {book.author}</p>
//       </>
//    );
// }
