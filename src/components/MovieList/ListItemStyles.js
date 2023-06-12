// material ui import
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    backgroundColor: 'rgba(213, 142, 19, 0.850)',
  },
  cardContainer: {
    width: '100%',
    height: '350px',
    paddingTop: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    maxWidth: '100%',
    cursor: 'pointer',

  },
  cardMedia: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    maxHeight: '100%',
  },
  cardContent: {
    marginTop: '-25px',
    marginBottom: '-30px',
  },
})