import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/home/home';
import Header from './components/header/header';

const theme = {
	bgMain: '#e3e8f3',
	bgCard: '#fff',
	textPrimary: '#111',
	textSecondary: '#B0B2C1',
	textHighlighted: '#D96E3C',
	btnPrimary: '#84CD95',
	btnPrimaryText: '#fff',
	btnSecondary: '#fff',
	btnSecondaryText: '#111',
}

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/:cryptocurrencyId?' component={HomePage} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
