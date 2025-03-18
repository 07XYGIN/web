import axios from 'axios';
import { ElMessage } from 'element-plus';

const requests = axios.create({
	baseURL: '/api',
	timeout: 5000,
});

/**
 * 请求拦截器 token,参数加密.....
 * @see https://www.axios-http.cn/docs/interceptors
 * */
requests.interceptors.request.use(
	function (config) {
		console.log(config);
		return config;
	},
	function (error) {
		console.log(error);
		return Promise.reject(error);
	}
);

/**响应拦截器 */
requests.interceptors.response.use(
	function (response) {
		if (response.data.code == 200) {
			return response.data.msg;
		}
	},
	function (error) {
		if (error.response.data.code == 400) {
			ElMessage.error(error.response.data.msg);
		} else if (error.response.data.code == 500) {
			ElMessage.error(error.response.data.msg);
		}
		return Promise.reject(error);
	}
);

export default requests;
