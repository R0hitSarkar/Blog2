import React from 'react';
import './comment.css';

function Comment(props) {
    const items = props.items;
    const listItems = items.map(item =>{
        return <li className="list2" key={item.key}>
            <p><input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value, item.key)}} /><span>
                <button className="btn2" type="submit" onClick={ () => props.deleteItem(item.key)}>Delete</button>
                </span></p>
        </li>
    })
    return (
        <div><ol>{listItems}</ol></div>
    )
        
}

export default Comment;