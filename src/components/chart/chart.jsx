import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from 'recharts';
import ChartCustomTooltip from '../chart-custom-tooltip/chart-custom-tooltip';
import { formatDateAxis } from '../../helpers';

const Chart = ({ data, timeline }) => {
	return (
		<ResponsiveContainer width={'100%'} height={300}>
			<LineChart data={data}>
				<XAxis
					dataKey='time'
					tickFormatter={time => formatDateAxis(time, timeline)}
					tickMargin={10}
					interval={data.length / 5}
				/>
				<YAxis
					domain={['auto', 'auto']}
				/>
				<CartesianGrid strokeDasharray='3 3' />
				<Tooltip
					content={<ChartCustomTooltip />}
					timeline={timeline}
				/>
				<Line
					type='monotone'
					dataKey='priceUsd'
					stroke='#8884d8'
					strokeWidth={2}
					dot={false}
					activeDot={{ r: 5 }}
					animationDuration={600}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}

export default Chart;