import API from './api';

export const login = async (user) => {
	return await API({
		method: 'post',
		url: '/users/login',
		data: user
	})
		.then(({ data }) => {
			if (data.status === 200) {
				localStorage.setItem('email', data.info.user.email);
				localStorage.setItem('jwtToken', data.info.auth_token);
			} else {

			}
			return true;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchAllMentors = async () => {
	return await API({
		method: 'get',
		url: '/mentors',
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchAllMentees = async () => {
	return await API({
		method: 'get',
		url: '/users',
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchOneMentee = async (id) => {
	return await API({
		method: 'get',
		url: `/users/${id}`,
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			return error.response.data;
		});
};

//MOONRIDER
export const fetchOneCase = async (id) => {
	return await API({
		method: 'get',
		url: `/case_studies/${id}`,
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchAllCompany = async () => {
	return await API({
		method: 'get',
		url: `/companies`,
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const caseCreate = async (id, casestudy) => {
	console.log(id);


	if (id > 0) {
		return await API({
			method: 'put',
			url: `/case_studies/${id}`,
			data: casestudy
		})
			.then(({ data }) => {
				return data;
			})
			.catch(error => {
				return error.response.data;
			});

	} else {
		return await API({
			method: 'post',
			url: `/case_studies`,
			data: casestudy
		})
			.then(({ data }) => {
				return data;
			})
			.catch(error => {
				return error.response.data;
			});
	}
};

export const fetchAllCase = async () => {
	return await API({
		method: 'get',
		url: `/case_studies`,
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			return error.response.data;
		});
};