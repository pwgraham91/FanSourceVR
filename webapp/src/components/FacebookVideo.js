import React, { Component } from 'react';

class FacebookVideo extends Component {
  render() {
    return (
      <div className="fb-video" data-href={this.props.videoURL} data-width="500" data-show-text="false">
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite={this.props.videoURL}>
            <a href={this.props.videoURL}>How to Share With Just Friends</a>
            <p>How to share with just friends.</p>
            Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
          </blockquote>
        </div>
      </div>
    );
  }
}

export default FacebookVideo;
