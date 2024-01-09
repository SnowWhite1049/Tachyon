import axios from "axios";

import Auth from "./auth";

const URL = "http://localhost:3001/api/v1";

const API = (config) => {

	if (localStorage.getItem('auth')) {
		const token = Auth.getToken();
		config.headers = {
			Authorization: `Bearer ${token}`,
		};
	}

	// interceptors handle network error
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		function (error) {
			if (!error.response) {
				error.response = {
					data: "net work error",
					status: 500,
				};
			}
			if (error.response.status === 401) {
				throw error;
			}
			return Promise.reject(error);
		}
	);
	config.baseURL = URL;
	return axios(config);
};

export default API;
