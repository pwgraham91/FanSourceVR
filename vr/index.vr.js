import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  MediaPlayerState,
} from 'react-vr';

import VideoView from './components/VideoView';

class FanSourceVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true})
    };
  }
  render() {
    return (
      <View>
        <Pano source={asset('stadium_pano.jpg')}/>
        <VideoView layoutOrigin={[2.5, 1, 0]}
                   transform={[
                     {rotateY: 65},
                     {translate: [3, -1.1, 3]},
                   ]}
                   source={'soccer/222.mov'}
                   playerState={this.state.playerState} />
        <VideoView layoutOrigin={[0.5, 1.5, 0]}
                   transform={[{translate: [0, 0, -4]}]}
                   source={'soccer/111.mov'}
                   playerState={this.state.playerState} />
        <VideoView layoutOrigin={[-0.7, 2.5, 0]}
                   transform={[
                     {rotateY: -65},
                     {translate: [-1.7, 0, 0.2]}
                   ]}
                   source={'soccer/333.mov'}
                   playerState={this.state.playerState} />
      </View>
    );
  }
}

AppRegistry.registerComponent('FanSourceVR', () => FanSourceVR);
