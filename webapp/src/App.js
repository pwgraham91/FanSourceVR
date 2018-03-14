import React, { Component } from 'react';
import './App.css';

import FacebookVideo from './components/FacebookVideo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fan Source VR</h1>


        <div className="fb-live">
          <FacebookVideo videoID={1762190837170778} />
          <FacebookVideo videoID={1762190837170778} />
          <FacebookVideo videoID={1762190837170778} />
          <FacebookVideo videoID={1762190837170778} />
          <FacebookVideo videoID={1762190837170778} />
          <FacebookVideo videoID={1762190837170778} />

        </div>

      </div>
    );
  }
}

export default App;
