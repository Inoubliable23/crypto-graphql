import React from 'react';
import styled from 'styled-components';
import Chart from '../chart/chart';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
	padding: 30px 20px;
	background-color: #fff;
	border-radius: 10px;
`

const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	padding: 0 10px;
`

const ChartContainer = styled.div`
	margin-top: 30px;
`

const HISTORY_QUERY = gql`
	query History($id: ID!) {
		history(id: $id) {
			priceUsd
			time
		}
	}
`

const ChartCard = ({ match }) => {

	const cryptocurrencyId = match.params.cryptocurrencyId || 'bitcoin';

	const { data } = useQuery(HISTORY_QUERY, {
		variables: {
			id: cryptocurrencyId
		}
	});

	return (
		<Container>
			<Title>{cryptocurrencyId}</Title>
			<ChartContainer>
				{
					data &&
					<Chart data={data.history} />
				}
			</ChartContainer>
		</Container>
	);
}

export default withRouter(ChartCard);