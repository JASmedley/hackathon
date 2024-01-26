import React from 'react';
import './App.css';
import DisplayArticleCard from './DisplayArticles.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ListArticles: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.SearchForm();
  }

  componentDidUpdate() {
    console.log(this.state.ListArticles);
  }

  SearchForm() {
    fetch(`https://hn.algolia.com/api/v1/search?query=${this.state.text}&tags=${this.filteredResults()}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ListArticles: data.hits,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  consoleLogArticles() {
    console.log(this.state.ListArticles);
  }

  handleSearch() {
    this.SearchForm(); // Call fetchData again when search query changes
  }

  filteredResults(event){
    return 'story'
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className='container'>
        <header className="SearchHeader">
          <a className="logo" href="https://news.ycombinator.com/" target="_self">
            <img src="../logo.png" alt="Logo"></img>
          </a>
          <form>
            <img className="search_icon" src="../search_icon.png" alt="Search icon"></img>
            <input className='searchBox' onKeyUp={this.handleSearch} onChange={this.handleChange} placeholder="Search stories by title, url or author"></input>
          </form>
          <a href="https://hn.algolia.com/settings" target="_self">
            <img className="settings_icon" src="../settings_icon.png" alt="Settings icon"></img>
          </a>
        </header>
        <div className="SearchFilters">
          <div className="SearchFilters_filters">
            <span className="SearchFilters_filterContainer"> 
              <span className="SearchFilters_text">Search </span>
              <select  >
                <option onChange={this.filteredResults} value="date">DATE</option>
                <option onChange={this.filteredResults} value="author">AUTHOR</option>
                <option onChange={this.filteredResults} value="title">TITLE</option>
              </select>
            </span>
          </div>
          <div className="SearchFilters_meta">
            <p className="SearchFilters_engineProcessingTime"> PLACEHOLDER </p>
          </div>
        </div>
        <ul className="SearchResults">
          {this.state.ListArticles.map((article, index) => (
            <DisplayArticleCard
              key={index}
              title={article.title}
              url={article.url}
              points={article.points}
              author={article._highlightResult.author.value}
              created={article.created_at}
              comments={article.num_comments}
              storyID={article.story_id}
            />
          ))}
        </ul>
      </div>
    );
  }
}
