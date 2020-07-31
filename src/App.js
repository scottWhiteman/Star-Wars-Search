import React from 'react';
import './App.css';
import Header from './Header/Header';
import SearchMain from './SearchMain/SearchMain';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchMain/>
      </div>
    );
  }
}

export default App;
