import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getToken } from '../helpers';
import { SERVER_URL } from '../constants';

const token = getToken();

const httpLink = createHttpLink({
	uri: SERVER_URL,
	headers: {
		Authorization: token ? `Bearer ${token}` : ''
	}
});

export default new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});