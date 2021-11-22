import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBar from './components/NavBar';
import AddPost from './components/AddPost';
import { postActions } from './store/index';
import SinglePage from './components/SinglePage';


function App() {
  const dispatch = useDispatch();
  const AddPostActive = useSelector(state => state.addPost);
  const SinglePostActive = useSelector(state => state.singlePost)
  const [postList, setPostList] = useState([]);
  const [singlePost,setSiglePost] = useState([]);
  const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    const Posts = Array.from(data);
    setPostList(Posts)
    console.log(postList);
  }
  useEffect(() => {
    getPosts();
  },[]);

  const newPostData = (e) => {
    setPostList([e, ...postList]);
  }

  const deletePost = (key) => {
    console.log(postList);
    const filterPost = postList.filter(items => key !== items.id);
    setPostList(filterPost);
  };
  const editPost = (text, key) => {
    const posts = postList;
    const newL = posts.map(item => {
      if(item.id ===key){
        item.title = text;
        return item;
      }
      else return item;
    })
    setPostList(newL);
  };
  const expendPost = (id, title, userId) => {
    setSiglePost([id, title, userId]);
    dispatch({type:"SinglePost"})
  };
  return (<div>
    <NavBar />
    {AddPostActive && <AddPost passData={newPostData} />}
    {SinglePostActive && <SinglePage data={singlePost} />}
    {!SinglePostActive && <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {postList.map(item => {return (<Grid item xs={4} key={item.id}>
               <Posts title={item.title} id={item.id} userId={item.userId} deletePost={deletePost} editPost={editPost} expendPost={expendPost} />
             </Grid>)
            })}
        </Grid>
      </Box>}
    </div>
  );
}

export default App;
