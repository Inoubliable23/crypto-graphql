import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import Chart from '../chart/chart';
import ChartTimelinesMenu from '../chart-timelines-menu/chart-timelines-menu';
import Card from '../card/card';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
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
	query History($id: ID!, $timeline: String!) {
		history(id: $id, timeline: $timeline) {
			priceUsd
			time
		}
	}
`

const ChartCard = () => {

	const location = useLocation();
	const queryParams = queryString.parse(location.search);
	const timeline = queryParams.timeline || '1d';

	const { cryptocurrencyId } = useParams();
	const cryptocurrencyIdParam = cryptocurrencyId || 'bitcoin';

	const { data } = useQuery(HISTORY_QUERY, {
		variables: {
			id: cryptocurrencyIdParam,
			timeline
		}
	});

	return (
		<Card>
			<HeaderContainer>
				<Title>{cryptocurrencyIdParam}</Title>
				<ChartTimelinesMenu />
			</HeaderContainer>
			<ChartContainer>
				{
					data &&
					<Chart data={data.history} timeline={timeline} />
				}
			</ChartContainer>
		</Card>
	);
}

export default ChartCard;