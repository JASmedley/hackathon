import React, {useState} from 'react'


function Article(props) {

  const [isLiked,setIsLiked] = useState(false);

  return (

    <li  className="articles"> 
        <h2 >{props.title}</h2>
        <a href={props.url} target="_blank" class = "gray"> ( {props.url} )</a>
        <br></br>
        <p>{props.points} points | </p>
        <p> {props.author} | </p>
        <p> {props.created} | </p>
        <p> {props.comments} comments</p>
  </li>
  );
}

export default Article;