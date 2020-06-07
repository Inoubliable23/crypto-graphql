import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import apolloClient from './apolloClient/client';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={apolloClient}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);