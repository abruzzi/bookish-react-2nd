import TextField from "@material-ui/core/TextField/TextField";
import React from "react";

import {clone, isEmpty} from 'lodash';

const SearchBox = ({term, onSearch}) => {
  const protect = (event) => {
    const value = clone(event.target.value);
    if(!isEmpty(value.trim())) {
      return onSearch(event)
    }
  }

  return (<TextField
    fullWidth
    label="Search"
    value={term}
    data-test="search"
    onChange={protect}
    margin="normal"
    variant="outlined"
  />)
};

export default SearchBox;