import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

const Chart = ({ data, timeline }) => {

	const formatDateAxis = time => {
		switch (timeline) {
			case '1d':
				return dayjs(parseInt(time)).format('HH:mm');
			case '5d':
				return dayjs(parseInt(time)).format('D. MMM');
			case '1m':
				return dayjs(parseInt(time)).format('D. MMM');
			case '1y':
				return dayjs(parseInt(time)).format('D. MMM YYYY');
			case 'all':
				return dayjs(parseInt(time)).format('MMM YYYY');

			default:
				return dayjs(parseInt(time)).format('D. MMM');
		}
	}

	const formatDateTooltip = time => {
		switch (timeline) {
			case '1d':
				return dayjs(parseInt(time)).format('HH:mm');
			case '5d':
				return dayjs(parseInt(time)).format('D. MMM');
			case '1m':
				return dayjs(parseInt(time)).format('D. MMM');
			case '1y':
				return dayjs(parseInt(time)).format('D. MMM YYYY');
			case 'all':
				return dayjs(parseInt(time)).format('MMM YYYY');

			default:
				return dayjs(parseInt(time)).format('D. MMM');
		}
	}

	return (
		<ResponsiveContainer width={'100%'} height={300}>
			<LineChart data={data}>
				<XAxis
					dataKey='time'
					tickFormatter={formatDateAxis}
					tickMargin={10}
					interval={data.length / 5}
				/>
				<YAxis
					domain={['auto', 'auto']}
				/>
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