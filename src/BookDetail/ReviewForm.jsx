import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import * as actions from "../redux/actions/actions";
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid/Grid";

const ReviewForm = ({id}) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  return (<form noValidate autoComplete="off">
    <Grid container>
      <Grid item xs={12}>
        <TextField
          label="Name"
          name="name"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
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
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" name="submit" onClick={() => dispatch(actions.saveReview(id, {name, content}))}>
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>)
}

export default ReviewForm;