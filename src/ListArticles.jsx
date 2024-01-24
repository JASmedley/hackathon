import React from 'react';
import DisplayArticleCard from "./DisplayArticles"
import App from './App.jsx'

class ListArticles extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);

    this.state = {
      ListArticles: [],
    };
  }

  componentDidMount() {
    console.log('Mounted');
   
      try {
        fetch('https://hn.algolia.com/api/v1/search')
        .then((response) => {
          return response.json();
        })
        .then((data) =>
          this.setState({
            ListArticles: data.hits,
          })
        )
        
      } catch (error) {
        console.error('Error fetching data:', error)
      };
  }

  componentDidUpdate() {
    console.log(this.state.ListArticles);
  }


  render() {
    console.log('In render');
    return (
      <ul className="SearchResults">
        {this.state.ListArticles.map((article, index) => {
         return <DisplayArticleCard title={article.title} url={article.url} points={article.points} author = {article._highlightResult.author.value} created={article.created_at} comments={article.num_comments} storyID={article.story_id}/>
        })}
      </ul>
    );
  }
}

export default ListArticles
