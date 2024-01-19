import React from 'react'


function Article(props) {

  const commentURL ='https://news.ycombinator.com/item?id='+props.storyID
  const authorURL = 'https://news.ycombinator.com/user?id='+props.author

  return (

    <li  className="articles"> 
        <h2 className="title">{props.title}</h2>
        <a href={props.url} target="_blank" class = "titleURL"> ( {props.url} )</a>
        <br></br>
        <a href={commentURL} target="_blank" class="info">{props.points} points | </a>
        <a href={authorURL} target="_blank" class="info"> {props.author} | </a>
        <a href={commentURL} target="_blank" class="info"> {props.created} | </a>
        <a href={commentURL} target="_blank" class="info"> {props.comments} comments</a>
  </li>
  );
}

export default Article;