import React from 'react';
import { Router } from 'react-router-dom';
import { wait, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import dayjs from 'dayjs';

import ApolloMockedProvider from '../apolloClient/ApolloMockedProvider';
import ChartCard from '../components/chart-card/chart-card';

it('renders chart when data is fetched', async () => {

	const priceToday = 1.23;
	const priceYesterday = 2.23;
	const priceBeforeYesterday = 3.23;
	const timeToday = dayjs().valueOf();
	const timeYesterday = dayjs().subtract(1, 'day').valueOf();
	const timeBeforeYesterday = dayjs().subtract(2, 'day').valueOf();

	const resolvers = {
		Query: {
			history: () => [
				{
					priceUsd: priceBeforeYesterday,
					time: timeBeforeYesterday
				},
				{
					priceUsd: priceYesterday,
					time: timeYesterday
				},
				{
					priceUsd: priceToday,
					time: timeToday
				}
			]
		}
	};

	const history = createMemoryHistory();
	const { container } = render(
		<Router history={history}>
			<ApolloMockedProvider resolvers={resolvers}>
				<ChartCard />
			</ApolloMockedProvider>
		</Router>
	);

	expect(container.querySelector('.recharts-responsive-container')).toBeNull();

	await wait();

	expect(container.querySelector('.recharts-responsive-container')).not.toBeNull();
});