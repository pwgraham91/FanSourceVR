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
            layoutOrigin: [2.5, 1, 0],
            transform: [
              {rotateY: 65},
              {translate: [3, -1.1, 3]},
              ],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={asset('soccer/222.mov')}
            playerState={this.state.playerState}
            loop={true}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            layoutOrigin: [0.5, 1.5, 0],
            transform: [{translate: [0, 0, -4]}],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={asset('soccer/111.mov')}
            playerState={this.state.playerState}
            loop={true}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            layoutOrigin: [0, 0, 0],
            transform: [{translate: [0, 0, -4]}],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={asset('soccer/333.mov')}
            playerState={this.state.playerState}
            loop={true}
          />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('FanSourceVR', () => FanSourceVR);
