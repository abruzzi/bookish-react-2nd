import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import BookList from "./BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/books');
      setBooks(res.data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
      Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}

export default App;
