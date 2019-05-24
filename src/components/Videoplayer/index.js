import React from 'react'

class Videoplayer extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
		this.playPauseVideo = this.playPauseVideo.bind(this);
		this.moveBackward = this.moveBackward.bind(this);
		this.moveForward = this.moveForward.bind(this);
		this.stopVideo = this.stopVideo.bind(this);
	}
	
	// Move the video backward for 5 seconds
	moveBackward = () => {
	  const videoElement = document.querySelector('.video-element');
	  videoElement.currentTime -= 5;
	};

	// Move the video forward for 5 seconds
	moveForward = () => {
	  const videoElement = document.querySelector('.video-element');
	  videoElement.currentTime += 5;
	};

	// Stop the video
	stopVideo = () => {
	  const videoElement = document.querySelector('.video-element');
	  const btnPlay = document.querySelector('.btn-play');
	  const btnPlayIcon = btnPlay.querySelector('.fa');
	  videoElement.pause();
	  videoElement.currentTime = 0;
	  btnPlayIcon.classList.remove('fa-pause');
	  btnPlayIcon.classList.add('fa-play');
	};

	// Play / Pause the video
	playPauseVideo = () => {
	  const videoElement = document.querySelector('.video-element');
	  const btnPlay = document.querySelector('.btn-play');
	  const btnPlayIcon = btnPlay.querySelector('.fa');
	  if (videoElement.paused) {
	    videoElement.play();

	    btnPlayIcon.classList.remove('fa-play');
	    btnPlayIcon.classList.add('fa-pause');
	  } else {
	    videoElement.pause();

	    btnPlayIcon.classList.remove('fa-pause');
	    btnPlayIcon.classList.add('fa-play');
	  }
	};


	render(){
		return(
			<div className="row justify-content-center">
				<div className="video-wrapper">
				  <video className="video-element">
				    <source src={ this.props.video } type="video/mp4" />
				  </video>

				  <div className="video-controls">
				    <button className="btn btn-backward"><span onClick={this.moveBackward} className="fa fa-backward"></span></button>

				    <button className="btn btn-play"><span onClick={this.playPauseVideo} className="fa fa-play"></span></button>

				    <button className="btn btn-forward"><span onClick={this.moveForward} className="fa fa-forward"></span></button>

				    <button className="btn btn-stop"><span onClick={this.stopVideo} className="fa fa-stop"></span></button>

				  </div>
				</div>
			</div>
		)
	}
}

export default Videoplayer;