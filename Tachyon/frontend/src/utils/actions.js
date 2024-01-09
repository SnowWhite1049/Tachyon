import API from './api';

export const login = async (user) => {
	return await API({
		method: 'post',
		url: '/users/login',
		data: user
	})
		.then((res) => {
			if (res.status === 200) {
				localStorage.setItem('auth', JSON.stringify({
					...res.data,
					token_expiration: new Date().getTime() / 1000 + res.data.expire_in
				}));
			}
			return { status: 200 };
		})
		.catch(error => {
			if (error.response && (error.response.status == 401 || error.response.status == 500))
				return error.response.data.error;
			return error;
		});
};

export const fetchAllMentors = async () => {
	return await API({
		method: 'get',
		url: '/mentors',
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchMentor = async (id) => {
	return await API({
		method: 'get',
		url: `/mentors/${id}`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const applyMentor = async (id) => {
	return await API({
		method: 'get',
		url: `/users/mentor/${id}`,
	})
		.then((res) => {
			return res;
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

export const fetchAllEvents = async () => {
	return await API({
		method: 'get',
		url: `/events`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchEventReservations = async () => {
	return await API({
		method: 'get',
		url: `/event_reservations/user`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchLastArticle = async () => {
	return await API({
		method: 'get',
		url: `/articles/last`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchEvent = async (id) => {
	return await API({
		method: 'get',
		url: `/events/${id}`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchArticle = async (id) => {
	return await API({
		method: 'get',
		url: `/articles/${id}`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchAllIndustries = async () => {
	return await API({
		method: 'get',
		url: `/industries`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};

export const fetchCompany = async (id) => {
	return await API({
		method: 'get',
		url: `/companies/${id}`,
	})
		.then((res) => {
			return res;
		})
		.catch(error => {
			return error.response.data;
		});
};