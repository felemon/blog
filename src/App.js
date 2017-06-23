import React, { Component } from 'react';
import Header from './components/Header';
import Gallery from './pages/gallery';
import './css';

class App extends Component {

	render() {
		return (
			<div>
				<Header/>
				<Gallery/>
			</div>
		);
	}
}

export default App;
