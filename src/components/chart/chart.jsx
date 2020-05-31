import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

const formatDateAxis = time => {
	return dayjs(parseInt(time)).format('MMM YYYY');
}

const formatDateTooltip = time => {
	return dayjs(parseInt(time)).format('D. MMM YYYY');
}

const Chart = ({ data }) => {
	return (
		<ResponsiveContainer width={'100%'} height={300}>
			<LineChart data={data}>
				<XAxis
					dataKey='time'
					tickFormatter={formatDateAxis}
					tickMargin={10}
					interval={300}
				/>
				<YAxis />
				<CartesianGrid strokeDasharray='3 3' />
				<Tooltip labelFormatter={formatDateTooltip} />
				<Line
					type='monotone'
					dataKey='priceUsd'
					stroke='#8884d8'
					dot={false}
					activeDot={{ r: 4 }}
					animationDuration={600}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}

export default Chart;