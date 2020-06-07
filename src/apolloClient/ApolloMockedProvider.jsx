import React from 'react';
import { makeExecutableSchema, addMocksToSchema } from 'graphql-tools';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloProvider } from 'react-apollo';

import { schemaString } from './schema';
import dayjs from 'dayjs';

const ApolloMockedProvider = ({ children, resolvers }) => {

	const mocks = {
		Cryptocurrency: () => ({
			id: 1,
			rank: 1,
			symbol: 'TC',
			name: 'Test Coin',
			priceUsd: 1.23,
			changePercent24Hr: 1
		}),
		History: () => ({
			priceUsd: 1.23,
			time: dayjs().valueOf()
		})
	}

	const schema = makeExecutableSchema({ typeDefs: schemaString, resolvers });
	const schemaWithMocks = addMocksToSchema({ schema, mocks, preserveResolvers: true });

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: new SchemaLink({ schema: schemaWithMocks })
	});

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
}

export default ApolloMockedProvider;