import React from "react";
import {asset, View, Video} from 'react-vr';

class VideoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.playerState}
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          layoutOrigin: this.props.layoutOrigin,
          transform: this.props.transform,
        }}>
        <Video
          style={{height: 2.25, width: 4}}
          source={asset(this.props.source)}
          playerState={this.props.playerState}
          loop={true}
        />
      </View>
    )
  }
}

export default VideoView;
