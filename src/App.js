import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import RatesCard from './components/rates-card/rates-card';
import { GlobalStyle } from './global.styles';

const theme = {
	bgMain: '#edf1f8',
	bgCard: '#fff'
}

const Container = styled.div`
	padding: 50px;
`

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<RatesCard />
			</Container>
		</ThemeProvider>
	);
}

export default App;
