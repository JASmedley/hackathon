import React from 'react';
import './App.css';
import Articles from './Articles.jsx'

export default class App extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchbar: event.target.value});
  }


  handleSubmit(event) {
    console.log('SearchText: ' + this.state.value);
    event.preventDefault();
  }

  // 1. Look up component lifecycle methods - use onChange instead of onKeyUp
  // 2. capture user inputs in state 
  // 3. Fire off fetch in useEffect everytime state updates 
  // 4. Replicate the thing you're doing with the comment URL (dynamic URL needs to be connected to state)

  render() {
    console.log('In render');
    return (
    <div className='container'>
      <header className="SearchHeader">
        <a className="logo" href="https://news.ycombinator.com/" target="_self">
        <img src="../logo.png" ></img>
        </a>
        <form value={this.state.value}>
        <img className="search_icon" src="../search_icon.png" ></img>
        <input className='searchBox' type="text"  placeholder="Search stories by title, url or author" onKeyUp={this.handleSubmit} onChange={this.handleChange}></input>
    {/* Only need to filter in searchbox by title */}
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
      <Articles/>
    </div>
    );
  }
}
