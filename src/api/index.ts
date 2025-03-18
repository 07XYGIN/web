import requests from '../utils/reqtests';

/**200 */
export const a = () => {
	return requests({
		url: '/index',
		method: 'get',
	});
};
/**400 */
export const b = () => {
	return requests({
		url: '/error',
		method: 'get',
	});
};

/**500 */ export const c = () => {
	return requests({
		url: '/waring',
		method: 'get',
	});
};
