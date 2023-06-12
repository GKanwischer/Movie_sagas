// material ui import
import { Card, CardContent, CardMedia } from '@material-ui/core'
// an attempt at a different styling file format, specifically for a material ui component
import { useStyles } from './ListItemStyles';
// css import
import './MovieList.css'

// component to handle each individual movie in the MovieList display
export default function ListItem({ movie }) {
    // variable to help access the material ui styling
    const classes = useStyles();

    return (
        <Card elevation={6} className={classes.card}>
            <div className={classes.cardContainer}>
                <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={movie.poster}
                    alt={movie.title}
                />
            </div>
            <CardContent className={classes.cardContent}>
                <h3>{movie.title}</h3>
            </CardContent>
        </Card>
    )
}