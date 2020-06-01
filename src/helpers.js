const dayjs = require('dayjs');

const mapTimelineToAxisDate = {
	'1d': 'HH:mm',
	'5d': 'D. MMM',
	'1m': 'D. MMM',
	'1y': 'D. MMM YYYY',
	'all': 'MMM YYYY'
};

const mapTimelineToTooltipDate = {
	'1d': 'HH:mm',
	'5d': 'D. MMM HH:mm',
	'1m': 'D. MMM',
	'1y': 'D. MMM YYYY',
	'all': 'MMM YYYY'
};

export const formatDateAxis = (time, timeline) => {
	const format = mapTimelineToAxisDate[timeline];
	return dayjs(parseInt(time)).format(format);
}

export const formatDateTooltip = (time, timeline) => {
	const format = mapTimelineToTooltipDate[timeline];
	return dayjs(parseInt(time)).format(format);
}