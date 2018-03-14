import React, { Component } from 'react';

class FacebookVideo extends Component {
  constructor(props) {
    super(props);
    this.videoURL = `https://www.facebook.com/facebook/videos/${this.props.videoID}/`
  }

  render() {
    return (
      <div className="fb-video" data-href={this.videoURL} data-width="500" data-show-text="false">
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite={this.videoURL}>
            <a href={this.videoURL}>How to Share With Just Friends</a>
            <p>How to share with just friends.</p>
            Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
          </blockquote>
        </div>
      </div>
    );
  }
}

export default FacebookVideo;
