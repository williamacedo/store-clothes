import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Routes />
			</BrowserRouter>
		);
	}
}

export default App;