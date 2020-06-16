import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/home/home';
import Header from './components/header/header';
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';
import PrivateRoute from './components/private-route/private-route';

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
			<Switch>
				<Route exact path='/login' component={LoginPage} />
				<Route exact path='/signup' component={SignupPage} />
				<>
					<Header />
					<PrivateRoute exact path='/:cryptocurrencyId?' component={HomePage} />
				</>
			</Switch>
		</ThemeProvider>
	);
}

export default App;
