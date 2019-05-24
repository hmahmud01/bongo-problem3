// const btnBackward = document.querySelector('.btn-backward');
// const btnPlay = document.querySelector('.btn-play');
// const btnPlayIcon = btnPlay.querySelector('.fa');
// const btnForward = document.querySelector('.btn-forward');
// const btnStop = document.querySelector('.btn-stop');
// const progressBar = document.querySelector('.progress-bar');
// const progressBarFill = document.querySelector('.progress-bar-fill');
// const videoElement = document.querySelector('.video-element');

// // Move the video backward for 5 seconds
// const moveBackward = () => {
//   videoElement.currentTime -= 5;
// };

// // Move the video forward for 5 seconds
// const moveForward = () => {
//   videoElement.currentTime += 5;
// };

// // Play / Pause the video
// const playPauseVideo = () => {
//   if (videoElement.paused) {
//     videoElement.play();

//     btnPlayIcon.classList.remove('fa-play');
//     btnPlayIcon.classList.add('fa-pause');
//   } else {
//     videoElement.pause();

//     btnPlayIcon.classList.remove('fa-pause');
//     btnPlayIcon.classList.add('fa-play');
//   }
// };

// // Stop the video
// const stopVideo = () => {
//   videoElement.pause();
//   videoElement.currentTime = 0;
//   btnPlayIcon.classList.remove('fa-pause');
//   btnPlayIcon.classList.add('fa-play');
// };

// // Update progress bar as the video plays
// const updateProgress = () => {
//   // Calculate current progress
//   let value = 100 / videoElement.duration * videoElement.currentTime;

//   // Update the slider value
//   progressBarFill.style.width = value + '%';
// };

// // Event listeners
// btnBackward.addEventListener('click', moveBackward, false);
// btnPlay.addEventListener('click', playPauseVideo, false);
// btnForward.addEventListener('click', moveForward, false);
// btnStop.addEventListener('click', stopVideo, false);
// videoElement.addEventListener('ended', () => {
//   btnPlay.setAttribute('hidden', 'true');
// }, false);
// videoElement.addEventListener('timeupdate', updateProgress, false);