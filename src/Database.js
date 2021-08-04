import {db} from "./firebase";
import React,{useState} from "react";
import Uniqid from 'uniqid';
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
function Database() {
   const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
   
    const handleSubmit = async (event) => {
    event.preventDefault();
    if (user && user?.uid==='hqg3zaQsePRl8T2FZ5fgs5ImZNw2'){
      const id = Uniqid();
      db?.collection("products")
        .doc(id)
        .set({
         title,url,price,rating
        });
      history.replace('/');
    }
    else {
      alert("You don't have the necessary permisions to add new Products");
      history.replace("/");
    }
  };
  const [title,setTitle]=useState("");
  const [url,setUrl]=useState("");
  const [price,setPrice]=useState(1);
  const [rating,setRating]=useState(1);
  
  return (
    <div className="create__form ui segment container">
      <form action="" className="ui  form">
        <div className="field">
          <label>
            Title
            </label>
            <input
              type="text"
              title="TITLE"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
        </div>
        <div className="field">
          <label>
            Image-URL</label>
            <input
              type="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
        </div>
        <div className="field">
          <label>
            Price</label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
        </div>
        <div className="field">
          <label>
            Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
        </div>
        <button className="ui button primary fluid" onClick={handleSubmit} value="Submit">
          Submit
        </button>
      </form>
    </div>
  );

}

export default Database;
