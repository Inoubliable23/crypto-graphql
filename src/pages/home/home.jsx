import React from 'react';
import styled from 'styled-components';
import ChartCard from '../../components/chart-card/chart-card';
import RatesCard from '../../components/rates-card/rates-card';
import TradeCard from '../../components/trade-card/trade-card';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	padding: 50px;
`

const ChartCardContainer = styled.div`
	grid-column: 1 / span 2;
`

const HomePage = () => {
	return (
		<Container>
			<ChartCardContainer>
				<ChartCard />
			</ChartCardContainer>
			<RatesCard />
			<TradeCard />
		</Container>
	);
}

export default HomePage;