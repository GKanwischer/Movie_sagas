// react based imports
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui imports
import { Box, Input } from '@material-ui/core';
import { Select, Option, Button } from '@mui/joy';
// css import
import './MovieForm.css'

export default function MovieForm() {
    // instantiation of useHistory
    const history = useHistory();
    const dispatch = useDispatch();

    // variable to locally hold the categories from the store
    const genres = useSelector(store => store.genres);

    // local state for input fields
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [urlInput, setUrlInput] = useState('');
    const [genreInput, setGenreInput] = useState('');

    let newMovie = { 
        title: titleInput, 
        poster: urlInput, 
        description: descriptionInput, 
        genre_id: genreInput };

    useEffect(() => {
        console.log('genre input:', genreInput);
    }, [genreInput]);

    // function for submitting a new movie to the db and its relation to a genre
    function handleSubmit() {
        dispatch({
            type: 'ADD_MOVIE',
            payload: newMovie
        })
        // history.push('/movies')
        console.log('new movie: ', newMovie);
    }

    // function that directs the user away from the add movie page
    function handleCancel() {
        history.push('/')
    }

    return (
        <div className="movie-form">
            <Box
                sx={{
                    py: 2,
                    display: 'grid',
                    gap: 2,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <h2>Add Movie to the Collection</h2>
                <Input
                    placeholder="Movie Title"
                    size="md"
                    variant="solid"
                    color="primary"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)} />
                <Input
                    className="descript-input"
                    placeholder="Description"
                    size="md"
                    variant="solid"
                    color="primary"
                    value={descriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)} />
                <Input
                    placeholder="Poster (url)"
                    size="md"
                    variant="solid"
                    color="primary"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)} />
                <Select
                    className="form-select"
                    placeholder="Select a genre"
                    value={genreInput}
                    onChange={(e, newValue) => setGenreInput(newValue)}
                >
                    {genres.map((genre) => (
                        <Option key={genre.id} value={genre.id}>
                            {genre.name}
                        </Option>
                    ))}Option
                </Select>
                <Button color="success" onClick={handleSubmit}>Submit</Button>
                <Button color="neutral" onClick={handleCancel}>Cancel</Button>
            </Box>
        </div>
    )
}