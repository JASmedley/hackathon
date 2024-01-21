import React from 'react';
import './App.css';
import Articles from './Articles.jsx'

export default class App extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);
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
        <input className='searchBox' type="text"  placeholder="Search stories by title, url or author"></input>
        </form>
        <a href="https://hn.algolia.com/settings" target="_self">
        <img  className="settings_icon" src="../settings_icon.png" ></img>
        </a>
      </header>
      <div className="SearchFilters">
        <div className="SearchFilters_filters">
          <span className="SearchFilters_filterContainer"> 
            <span className="SearchFilters_text">Search </span>
            <div className="Dropdown"> PLACEHOLDER </div>
          </span>
          <span className="SearchFilters_filterContainer"> 
            <span className="SearchFilters_text"> by </span>
            <div className="Dropdown"> PLACEHOLDER </div>
          </span>
          <span className="SearchFilters_filterContainer"> 
            <span className="SearchFilters_text"> for </span>
            <div className="Dropdown"> PLACEHOLDER </div>
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


