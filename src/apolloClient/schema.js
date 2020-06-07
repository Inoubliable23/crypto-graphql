export const schemaString = `
	type Query {
		cryptocurrencies: [Cryptocurrency!]!
		history(id: ID!, timeline: String!): [History]
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