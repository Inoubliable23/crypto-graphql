import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const token = localStorage.getItem('crypto-graphql-token');

const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
	headers: {
		Authorization: token ? `Bearer ${token}` : ''
	}
});

export default new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});