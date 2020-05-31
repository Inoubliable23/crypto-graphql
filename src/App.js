import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/home/home';

const theme = {
	bgMain: '#e3e8f3',
	bgCard: '#fff',
	textPrimary: '#111',
	textSecondary: '#B0B2C1'
}

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/home' component={HomePage} />
					<Route exact path='/home/:cryptocurrencyId' component={HomePage} />
				</Switch>
			</div>
		</ThemeProvider>
	);
}

export default App;
