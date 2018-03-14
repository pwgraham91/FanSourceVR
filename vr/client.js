// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import {addCustomizedVideoPlayer} from 'react-vr-web';
import DashVideoPlayer from "./DashVideoPlayer";

function init(bundle, parent, options) {
  addCustomizedVideoPlayer(DashVideoPlayer)
  const vr = new VRInstance(bundle, 'FanSourceVR', parent, {
    // Add custom options here
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
