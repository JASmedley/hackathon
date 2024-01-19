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
    <div>
      <header>Hello</header>
      <Articles/>
    </div>
    );
  }
}


