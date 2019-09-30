import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Route, Switch} from 'react-router-dom';
import BookListContainer from "./BookList/BookListContainer";
import BookDetailContainer from "./BookDetail/BookDetailsContainer";
import Container from "@material-ui/core/Container/Container";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer}/>
        <Route path="/books/:id" component={BookDetailContainer}/>
      </Switch>
    </Container>
  );
}

export default App;
