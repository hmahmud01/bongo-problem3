Problem 3 Video player with react app

Pseudocode for The problem :

get button actions response
if response is equal to moveBackward
	decrease the videoElement currentTime 5 sec
if response is equal to moveForward
	increase the videoElement currentTime 5 sec
if response is equal to playPauseVideo
	if video is paused
		resume the video
		update the button
	else
		pause the video
		update the button
if response is eqal to stop
	pause the video
	make the videoElement currentTime 0
	update the pause button to play button

