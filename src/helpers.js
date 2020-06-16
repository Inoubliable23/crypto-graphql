import dayjs from 'dayjs';
import { TOKEN_NAME } from './constants';

export const saveToken = token => {
	localStorage.setItem(TOKEN_NAME, token);
}

export const getToken = () => {
	return localStorage.getItem(TOKEN_NAME);
}

export const removeToken = () => {
	return localStorage.removeItem(TOKEN_NAME);
}

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