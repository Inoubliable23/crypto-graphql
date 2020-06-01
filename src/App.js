import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/home/home';

const theme = {
	bgMain: '#e3e8f3',
	bgCard: '#fff',
	textPrimary: '#111',
	textSecondary: '#B0B2C1',
	textHighlighted: '#D96E3C'
}

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div>
				<Switch>
					<Route exact path='/:cryptocurrencyId?' component={HomePage} />
				</Switch>
			</div>
		</ThemeProvider>
	);
}

export default App;
