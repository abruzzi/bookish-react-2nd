import React from "react";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  name: {
    maxHeight: 30,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  description: {
    maxHeight: 40,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));

const BookList = ({loading, error, books}) => {
  const classes = useStyles();

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>Error...</p>
  }

  return <div data-test="book-list" className={classes.root}>
    <Grid container spacing={3}>
      {
        books.map(book => (<Grid item xs={4} sm={4} key={book.id} className="book-item" >
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                  {book.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                  {book.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/books/${book.id}`}>View Details</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>))
      }
    </Grid>
  </div>;
}

export default BookList;