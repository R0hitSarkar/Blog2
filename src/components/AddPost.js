import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AddPost.css';

const AddPost = (props) => {
    const dispatch = useDispatch();
    
    const [newPost, setNewPost] = useState({
        id:"",
        userId:"",
        title:""
    });

    const handleInput = (e) => {
        setNewPost({
            id: Date.now(),
            userId: "rohit",
            title: e.target.value
        })
    }

    const AddPost = (e) => {
        e.preventDefault();
        console.log(newPost);
        if(newPost.title!==""){
            props.passData(newPost);
            setNewPost({
                id:"",
                userId:"",
                title:""
            })
        }
        dispatch({type:'AddPost'});
    }

    return (
        <div className="AddPost">
            <form id="Post" onSubmit={AddPost}>
                <input type="text" placeholder="Enter Text" value={newPost.title} onChange={handleInput} />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default AddPost;