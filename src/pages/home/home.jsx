import React from 'react';
import ChartCard from '../../components/chart-card/chart-card';
import RatesCard from '../../components/rates-card/rates-card';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	padding: 50px;
`

const HomePage = () => {
	return (
		<Container>
			<ChartCard />
			<RatesCard />
		</Container>
	);
}

export default HomePage;