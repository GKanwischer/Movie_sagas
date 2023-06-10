import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Details(){
    let movies = useSelector(store => store.movies);

    let params = useParams();
    console.log('params: ', params);

    // Go hunting for the book by the id that we were given
    let movieId = params.movieId; // :bookId is set up in App.js
    let movie = movies.find(movie => movie.id === Number(movieId));
    console.log('found movie: ', movie);

    if(!movie) return <h2>Invalid Movie ID</h2>;

    return(
        <container>
            <h3>hello</h3>
        </container>
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
