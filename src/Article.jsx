import React from 'react'


function Article(props) {

  const commentURL ='https://news.ycombinator.com/item?id='+props.storyID
  const authorURL = 'https://news.ycombinator.com/user?id='+props.author

  return (

    <li  className="articles"> 
        <a href={props.url} className="title">{props.title}</a>
        <a href={props.url} target="_blank" class = "titleURL"> ( {props.url} )</a>
        <br></br>
        <a href={commentURL} target="_self" class="info">{props.points} points | </a>
        <a href={authorURL} target="_self" class="info"> {props.author} | </a>
        <a href={commentURL} target="_self" class="info"> {props.created} | </a>
        <a href={commentURL} target="_self" class="info"> {props.comments} comments</a>
  </li>
  );
}

export default Article;