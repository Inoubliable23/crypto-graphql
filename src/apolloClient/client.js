import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000'
});

export default new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});