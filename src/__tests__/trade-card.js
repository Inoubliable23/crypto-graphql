import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import TradeCard from '../components/trade-card/trade-card';

it('lets user sell cryptocurrency', async () => {

	const history = createMemoryHistory();
	const { getByText } = render(
		<Router history={history}>
			<TradeCard />
		</Router>
	);

	const sellButton = getByText('Sell');
	const sellInput = sellButton.parentElement.getElementsByTagName('input')[0];

	expect(sellButton).toBeDisabled();

	await userEvent.type(sellInput, '12');

	expect(sellButton).toBeEnabled();
	userEvent.click(sellButton);

	expect(sellInput).toBeEmpty();
	expect(sellButton).toBeDisabled();
});

it('lets user buy cryptocurrency', async () => {

	const history = createMemoryHistory();
	const { getByText } = render(
		<Router history={history}>
			<TradeCard />
		</Router>
	);

	const buyButton = getByText('Buy');
	const buyInput = buyButton.parentElement.getElementsByTagName('input')[0];

	expect(buyButton).toBeDisabled();

	await userEvent.type(buyInput, '12');

	expect(buyButton).toBeEnabled();
	userEvent.click(buyButton);

	expect(buyInput).toBeEmpty();
	expect(buyButton).toBeDisabled();
});