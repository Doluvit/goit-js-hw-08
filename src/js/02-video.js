import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let currentTime = localStorage.getItem('videoplayer-current-time');
const saveCurrentTime = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      currentTime = seconds;
      saveCurrentTime(currentTime);
    })
    .catch(function (error) {
      console.log(error);
    });
});

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    seconds = currentTime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
