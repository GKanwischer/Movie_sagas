import { Card, CardContent, CardMedia } from '@material-ui/core'
import { useStyles } from './ListItemStyles';
import './MovieList.css'


export default function ListItem({ movie }) {
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