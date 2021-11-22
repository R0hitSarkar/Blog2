import { createStore } from 'redux';
import AddPost from '../components/AddPost';

const statusReducer = (state = {addPost: false, singlePost: false}, action) => {
    if(action.type === 'AddPost'){
        return {
            addPost: !state.addPost,
            singlePost: state.singlePost
        };
    }
    if(action.type === 'SinglePost'){
        return {
            addPost: state.addPost,
            singlePost: !state.singlePost
        };
    }
    return state;
}


const store = createStore(statusReducer);
export default store;