import React from 'react';
import styled from 'styled-components';
import { formatDateTooltip } from '../../helpers';

const Container = styled.div`
	display: flex;
	background-color: #fff;
	padding: 12px;
	border: 1px solid #d9d9d9;
`

const Value = styled.div`
	font-weight: 500;
	color: #111;
	margin-right: 10px;
`

const Label = styled.div`
	font-weight: 400;
	color: #999;
`

const ChartCustomTooltip = ({ active, payload, label, timeline }) => {
	if (active) {
		return (
			<Container>
				<Value>{payload[0].value}</Value>
				<Label>{formatDateTooltip(label, timeline)}</Label>
			</Container>
		);
	}

	return null;
}

export default ChartCustomTooltip;