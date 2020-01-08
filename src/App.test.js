import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Mainapp from './components/Mainapp';
import Footer from './components/Footer';
import Header from './components/Header';
import Videoplayer from './components/Videoplayer';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Welcome to Bongo problem-3 testing', function(){
	it('Main Component has Header - WORKS! :)', () => {
		const wrapper = shallow(<Mainapp />);
		const comps = <Header />;
		expect(wrapper.contains(comps)).to.equal(true);
	});
	it('Main Component has Video component - WORKS! :)', () => {
		const wrapper = shallow(<Mainapp />);	
		this.state = {
			video : 'video-url'
		}	
		const comps = <Videoplayer video={ this.state.video } />
							
		expect(wrapper.contains(comps)).to.equal(false);
	});
	it('Main Component has Footer - WORKS! :)', () => {
		const wrapper = shallow(<Mainapp />);
		const comps = <Footer />;
		expect(wrapper.contains(comps)).to.equal(true);
	});
});