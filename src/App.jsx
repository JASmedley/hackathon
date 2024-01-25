import React from 'react';
import './App.css';
import DisplayArticleCard from './DisplayArticles.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('In constructor');
    this.state = {
      text: '',
      searchQuery: [],
      ListArticles: [],

    }

  }

  componentDidMount() {
    console.log('Mounted');
   
      try {
        fetch(`https://hn.algolia.com/api/v1/search?query=&tags=story`) //NEED HELP WITH THIS PART 
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

  //Trying to adjust the fetch based on what a user types in the search bar, 

  consoleLogArticles() {
    console.log(this.state.ListArticles);
  }

  handleSearch() {
    this.setState({
      text: '',
      searchQuery: [...this.state.searchQuery,this.state.text]
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
    }

    

  render() {
    console.log('In render');
    return (
    <div className='container'>
      <header className="SearchHeader">
        <a className="logo" href="https://news.ycombinator.com/" target="_self">
        <img src="../logo.png" ></img>
        </a>
        <form>
        <img className="search_icon" src="../search_icon.png" ></img>
        <input className='searchBox' onKeyUp={this.handleSearch} onChange={this.handleChange} placeholder="Search stories by title, url or author" ></input>
        </form>
        <a href="https://hn.algolia.com/settings" target="_self">
        <img  className="settings_icon" src="../settings_icon.png" ></img>
        </a>
      </header>
      <div className="SearchFilters">
        <div className="SearchFilters_filters">
          <span className="SearchFilters_filterContainer"> 
            <span className="SearchFilters_text">Search </span>
            <div className="Dropdown"> DATE / AUTHOR / TITLE </div>
          </span>
        </div>
        <div className="SearchFilters_meta">
        <p className="SearchFilters_engineProcessingTime"> PLACEHOLDER </p>
      </div>
      </div>
      <ul className="SearchResults">
        {this.state.ListArticles.map((article, index) => {
         return <DisplayArticleCard title={article.title} url={article.url} points={article.points} author = {article._highlightResult.author.value} created={article.created_at} comments={article.num_comments} storyID={article.story_id}/>
        })}
      </ul>
    </div>
    );
  }
}