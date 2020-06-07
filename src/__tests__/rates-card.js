import React from 'react';
import { Router } from 'react-router-dom';
import { wait, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import RatesCard from '../components/rates-card/rates-card';
import ApolloMockedProvider from '../apolloClient/ApolloMockedProvider';

it('renders list of cryptocurrencies', async () => {
	const resolvers = {
		Query: {
			cryptocurrencies: () => [
				{
					id: 1,
					rank: 6,
					symbol: 'TC',
					name: 'Test Coin',
					priceUsd: 23.12,
					changePercent24Hr: 0.8
				},
				{
					id: 2,
					rank: 18,
					symbol: 'TC2',
					name: 'Test Coin 2',
					priceUsd: 1.02,
					changePercent24Hr: -2.16
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

	getByText('TC');
	getByText('Test Coin');
	getByText(/23.12/i);

	getByText('TC2');
	getByText('Test Coin 2');
	getByText(/1.02/i);

	expect(getAllByRole('link')[0]).toHaveAttribute('href', '/1');
	expect(getAllByRole('link')[1]).toHaveAttribute('href', '/2');

	const style1 = window.getComputedStyle(getByText(/0.8/i)).color;
	const style2 = window.getComputedStyle(getByText(/-2.16/i)).color;
	expect(style1).not.toEqual(style2);
});