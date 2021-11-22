import { useSelector, connect } from "react-redux";
import * as React from 'react';
import './Posts.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Posts = (props) => {
  const id =props.id;
  const title = props.title;
  const userId = props.userId;

  return(
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.userId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <input className='inputStyle' type="text" id={props.id} value={props.title} onChange={(e) => {
            props.editPost(e.target.value, props.id)
          }} />
        </Typography>
      </CardContent>
      <CardActions>
        <button size="small" onClick={() => props.deletePost(props.id)}>Delete</button>
        <button size="small" onClick={() =>props.expendPost(props.id, props.title, props.userId)}>Learn more</button>
      </CardActions>
    </Card>
  )
}

export default Posts;