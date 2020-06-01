import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Container = styled.div`
	display: flex;
`

const MenuItem = styled(NavLink)`
	color: ${props => props.theme.textSecondary};
	padding: 5px 10px;
	font-weight: 500;

	&.active {
		color: #DA6D3E;
	}
`

const ChartTimelinesMenu = () => {

	const location = useLocation();

	const checkActive = timeline => {
		if (!location) return false;
		const queryParams = queryString.parse(location.search);
		const timelineParam = queryParams.timeline || '1d';
		return timeline === timelineParam;
	}

	const timelines = ['1d', '5d', '1m', '1y', 'all'];
	return (
		<Container>
			{
				timelines.map(timeline => (
					<MenuItem
						key={timeline}
						exact
						to={`${location.pathname}?timeline=${timeline}`}
						isActive={() => checkActive(timeline)}
					>
						{timeline}
					</MenuItem>
				))
			}
		</Container>
	);
}

export default ChartTimelinesMenu;