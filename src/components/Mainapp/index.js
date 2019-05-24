import React from 'react';

import Header from '../Header';
import Videoplayer from '../Videoplayer';
import Footer from '../Footer';

import sample from '../local/video/sample.mp4'

class Mainapp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			video: sample,
		}
	}

	render(){
		return(
			<div>
				<Header />
				<Videoplayer video={ this.state.video } />
				<Footer />
			</div>
			)
	}
}

export default Mainapp;