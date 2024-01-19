import React from 'react';
import Article from "./Article"

class Articles extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);

    this.state = {
      ListArticles: [],
    };
  }

  componentDidMount() {
    console.log('Mounted');
    fetch('https://hn.algolia.com/api/v1/search')
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        this.setState({
          ListArticles: data.hits,
        })
      );
  }

  componentDidUpdate() {
    console.log(this.state.ListArticles);
  }


  render() {
    console.log('In render');
    return (
      <ul className="articles">
        {this.state.ListArticles.map((article, index) => {
         return <Article title={article.title} url={article.url} points={article.points} author = {article._highlightResult.author.value} created={article.created_at} comments={article.num_comments} storyID={article.story_id}/>
        })}
      </ul>
    );
  }
}

export default Articles
