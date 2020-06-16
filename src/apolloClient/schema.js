export const schemaString = `
	type Query {
		cryptocurrencies: [Cryptocurrency!]!
		history(id: ID!, timeline: String!): [History]
	}

	type Mutation {
		signup(name: String!, password: String!): AuthPayload
		login(name: String!, password: String!): AuthPayload
	}

	type User {
		id: ID!
		name: String!
		password: String!
	}

	type AuthPayload {
		token: String
		error: String
	}

	type Cryptocurrency {
		id: ID!
		rank: Int!
		symbol: String!
		name: String!
		supply: Int!
		maxSupply: Int!
		priceUsd: Float!
		changePercent24Hr: Float!
	}

	type History {
		priceUsd: Float
		time: String
	}
`;