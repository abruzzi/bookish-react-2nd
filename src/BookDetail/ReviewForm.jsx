import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import * as actions from "../redux/actions/actions";
import {useDispatch} from "react-redux";

const ReviewForm = ({id}) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  return (<form noValidate autoComplete="off">
    <TextField
      label="Name"
      name="name"
      margin="normal"
      variant="outlined"
      value={name}
      onChange={e => setName(e.target.value)}
    />

    <TextField
      name="content"
      label="Content"
      margin="normal"
      variant="outlined"
      multiline
      rowsMax="4"
      value={content}
      onChange={e => setContent(e.target.value)}
    />

    <Button variant="contained" color="primary" name="submit" onClick={() => dispatch(actions.saveReview(id, {name, content}))}>
      Submit
    </Button>
  </form>)
}

export default ReviewForm;