import React from "react";
import moment from "moment";

function DisplayArticleCard(props) {
  const commentURL = "https://news.ycombinator.com/item?id=" + props.storyID;
  const authorURL = "https://news.ycombinator.com/user?id=" + props.author;
  const removez = props.created.replace("Z", "");
  const removetime = removez.substr(0, 10);
  const formattedDate = removetime.replace("T", " ");
  const timeAgo = moment(props.created).fromNow();

  return (
    <li className="articles">
      <a href={props.url} className="title">
        {props.title}
      </a>
      <a href={props.url} target="_blank" class="titleURL">
        {" "}
        ( {props.url} )
      </a>
      <br></br>
      <a href={commentURL} target="_self" class="info">
        {props.points} points |{" "}
      </a>
      <a href={authorURL} target="_self" class="info">
        {" "}
        {props.author} |{" "}
      </a>
      <a href={commentURL} target="_self" class="info">
        {" "}
        {formattedDate} |{" "}
      </a>
      <a href={commentURL} target="_self" class="info">
        {" "}
        {timeAgo} |{" "}
      </a>
      <a href={commentURL} target="_self" class="info">
        {" "}
        {props.comments} comments
      </a>
    </li>
  );
}

export default DisplayArticleCard;
