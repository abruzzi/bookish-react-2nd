import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Route, Switch} from 'react-router-dom';
import BookListContainer from "./BookList/BookListContainer";
import BookDetailContainer from "./BookDetail/BookDetailsContainer";

const App = () => {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
      Bookish
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer} />
        <Route path="/books/:id" component={BookDetailContainer} />
      </Switch>
    </div>
  );
}

export default App;
