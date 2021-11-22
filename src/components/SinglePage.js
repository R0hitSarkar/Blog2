import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './singlePage.css';
import Comment from './comment';

export default function SinglePage(props) {
    const dispatch = useDispatch();
    const data = props.data;
    console.log(data);

    const [itemList, setItemList] = useState({
        items:[],
        currentItem:{
            text:'',
            key:''
        }
    })
    const handleInput = (e) => {
        setItemList({...itemList,
        currentItem:{
            text: e.target.value,
            key: Date.now()
        }
        })
    }
    const addItem = (e) =>{
        e.preventDefault();
        const newItem = itemList.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const item = [...itemList.items, newItem];
            setItemList({
                items: item,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    const deleteItem = (key) => {
        const filteredItem = itemList.items.filter(item =>
            item.key!==key
            );
        setItemList({
            ...itemList,
            items: filteredItem
        })

    }
    const setItem = (e) => {
        const item = itemList.items;
        item.map(item =>{
            item.text=e.text;
        })
        setItemList({
            ...itemList,
            items: item
        })
    }
    const BackHandler = () => {
        dispatch({type: "SinglePost"});
    }

  return (<div>
  <div className="mainBody"><Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data[2]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[1]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <button className='buttn' type='submit' onClick={BackHandler}>Back</button>
    </div>
    <div className="doc">
            <form id="comment" onSubmit={addItem} >
                <input type="text" placeholder="Enter Text" value={itemList.currentItem.text} onChange={handleInput} />
                <button type="submit">Add Comment</button>
            </form>
            <Comment items={itemList.items} deleteItem={deleteItem} setUpdate={setItem} />
    </div>
    </div>
  );
}