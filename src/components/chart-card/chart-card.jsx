import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import Chart from '../chart/chart';
import ChartTimelinesMenu from '../chart-timelines-menu/chart-timelines-menu';

const Container = styled.div`
	padding: 30px 20px;
	background-color: #fff;
	border-radius: 10px;
`

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
		<Container>
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
		</Container>
	);
}

export default ChartCard;