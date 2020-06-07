import React from 'react';
import { Router } from 'react-router-dom';
import { wait, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';

import RatesCard from '../components/rates-card/rates-card';
import ApolloMockedProvider from '../apolloClient/ApolloMockedProvider';

it('renders list of cryptocurrencies', async () => {

	const firstCoinId = '1';
	const firstCoinName = 'Test Coin';
	const firstCoinSymbol = 'TC';
	const firstCoinRank = 1;
	const firstCoinPrice = 23.12;
	const firstCoinChange = 0.8;

	const secondCoinId = '2';
	const secondCoinName = 'Test Coin 2';
	const secondCoinSymbol = 'TC2';
	const secondCoinRank = 2;
	const secondCoinPrice = 1.02;
	const secondCoinChange = -2.16;

	const resolvers = {
		Query: {
			cryptocurrencies: () => [
				{
					id: 1,
					name: firstCoinName,
					symbol: firstCoinSymbol,
					rank: firstCoinRank,
					priceUsd: firstCoinPrice,
					changePercent24Hr: firstCoinChange
				},
				{
					id: 2,
					name: secondCoinName,
					symbol: secondCoinSymbol,
					rank: secondCoinRank,
					priceUsd: secondCoinPrice,
					changePercent24Hr: secondCoinChange
				}
			]
		}
	};

	const history = createMemoryHistory();
	const { getByText, queryByText, getAllByRole } = render(
		<Router history={history}>
			<ApolloMockedProvider resolvers={resolvers}>
				<RatesCard />
			</ApolloMockedProvider>
		</Router>
	);

	getByText(/Loading/);

	await wait();

	expect(queryByText(/Loading/)).toBeNull();

	getByText(firstCoinName);
	getByText(firstCoinSymbol);
	getByText(new RegExp(firstCoinPrice));

	getByText(secondCoinName);
	getByText(secondCoinSymbol);
	getByText(new RegExp(secondCoinPrice));

	expect(getAllByRole('link')[0]).toHaveAttribute('href', `/${firstCoinId}`);
	expect(getAllByRole('link')[1]).toHaveAttribute('href', `/${secondCoinId}`);

	const style1 = window.getComputedStyle(getByText(new RegExp(firstCoinChange))).color;
	const style2 = window.getComputedStyle(getByText(new RegExp(secondCoinChange))).color;
	expect(style1).not.toEqual(style2);
});