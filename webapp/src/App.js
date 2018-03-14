import React, { Component } from 'react';
import './App.css';

import FacebookVideo from './components/FacebookVideo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []}
  }

  componentDidMount() {
    fetch("https://api.crowdtangle.com/posts/?listIds=554797&types=live_video,live_video_complete,live_video_scheduled&sortBy=date&token=RAgQBEFe1ZILaKJKHvOwY78ingbYpPvhU7aeHhWu", {
      headers: {
        'content-type': 'application/json',
      },
      mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        videos: data.result.posts
      })
    })
    .catch(data => {
      console.log('error', data)
    });
  }

  render() {
    let videos = [];
    for (let i=0; i < this.state.videos.length; i++) {
      videos.push(<FacebookVideo key={this.state.videos[i].link} videoURL={this.state.videos[i].link} />)
    }
    return (
      <div className="App">
        <h1>Fan Source VR</h1>
        <div className="fb-live">
          {videos}
        </div>
      </div>
    );
  }
}

export default App;
