import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  MediaPlayerState,
  VideoControl
} from 'react-vr';

export default class FanSourceVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    };
  }
  render() {
    return (
      <View>
        <Pano source={asset('stadium_pano.jpg')}/>
        <View
          style={{
            alignItems: 'center',
            layoutOrigin: [2, 1, 0],
            transform: [{translate: [0, 0, -8]}],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={asset('soccer/8th.mp4')}
            playerState={this.state.playerState} />
          <VideoControl
            style={{height: 0.2, width: 4}}
            playerState={this.state.playerState} />
        </View>
        <View
          style={{
            alignItems: 'center',
            layoutOrigin: [0.5, 1.5, 0],
            transform: [{translate: [0, 0, -4]}],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={asset('soccer/1st.mp4')}
            playerState={this.state.playerState} />
          <VideoControl
            style={{height: 0.2, width: 4}}
            playerState={this.state.playerState} />
        </View>
        <View
          style={{
            alignItems: 'center',
            layoutOrigin: [0, 0, 0],
            transform: [{translate: [0, 0, -4]}],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={asset('soccer/10th.mp4')}
            playerState={this.state.playerState} />
          <VideoControl
            style={{height: 0.2, width: 4}}
            playerState={this.state.playerState} />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('FanSourceVR', () => FanSourceVR);
