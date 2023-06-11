import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(){

    return(
        <div className="home">
            <h2> Welcome to my Movie Collection</h2>
            <p>Here you can browse through my collection of movies, <br/>
                see their poster art, and view addition details about each movie. <br/>
                 Such as genres it belongs to and a brief description.
            </p>
            <p>You will also be able to add your own movie to the collection<br/>
                by filling out the form on our <Link to="/movie_form">Add To Collection</Link> page.
            </p>
        </div>
    )
}