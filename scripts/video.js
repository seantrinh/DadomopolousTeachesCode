var room = location.hash;
var webrtc = new SimpleWebRTC({
  localVideoEl: 'localVideo',
  remoteVideosEl: '',
  autoRequestMedia: true,
  url: "http://155.246.130.70:8888/"
});

webrtc.on('readyToCall', () => {
  webrtc.joinRoom(room.substr(1));
});

webrtc.on('videoAdded', (video, peer) => {
  console.log('video added', peer);
  let remotes = document.getElementById('remotes');

  if (remotes) {
    let container = document.createElement('div');
    container.className = 'videoContainer';
    container.id = 'container_' + webrtc.getDomId(peer);
    container.appendChild(video);

    video.oncontextmenu = () => {
      return false;
    };

    remotes.appendChild(container);
  }
});

webrtc.on('videoRemoved', (video, peer) => {
  console.log('video removed ', peer);
  let remotes = document.getElementById('remotes');
  let el = document.getElementById(peer ? 'container_' + webrtc.getDomId(peer) : 'localScreenContainer');

  if (remotes && el) {
    remotes.removeChild(el);
  }
});

let muted = false;
let display = true;
$('#mute').click(() => {
  if (muted) {
    $('#mute > svg').attr('data-icon', 'microphone');
    webrtc.unmute();
  } else {
    $('#mute > svg').attr('data-icon', 'microphone-slash');
    webrtc.mute();
  }
  muted = !muted;
});

$('#display').click(() => {
  if (display) {
    $('#display > svg').attr('data-icon', 'video-slash');
    webrtc.pauseVideo();
  } else {
    $('#display > svg').attr('data-icon', 'video');
    webrtc.resumeVideo();
  }
  display = !display;
});
