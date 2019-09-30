import React, {useState} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import {useDispatch} from "react-redux";

import * as actions from '../redux/actions/actions';
import Typography from "@material-ui/core/Typography/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid/Grid";

const Review = ({review}) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(review.content);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if(editing) {
      dispatch(actions.updateReview(Number(review.id), {...review, content}))
    }

    setEditing(!editing);
  };

  return (<div className="review">
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="name">{review.name}</Typography>
        <Typography className="date">{review.date}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item xs={12}>
            {!editing ?
              (<Typography className="content">
                {review.content}
              </Typography>) :
              (<TextField
                fullWidth
                name="content"
                label="Content"
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
                value={content}
                onChange={e => setContent(e.target.value)}
              />)}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" name="submit" onClick={clickHandler}>
              {!editing ? "Edit" : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>

  </div>)
};

export default Review;