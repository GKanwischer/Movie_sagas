// react import
import { NavLink } from 'react-router-dom';

// component to handle the display of the header and navigation links
export default function Header() {
  return (
    <>
      <h1>The Movies Saga!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Collection</NavLink>
        <NavLink to="/movie_form" >Add Movie</NavLink>
      </nav></>
  )
}

