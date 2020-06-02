import axios from 'axios';

// axios.defaults.withCredentials = true;

let HTTP = axios.create({
    // baseURL: ``,
    baseURL: process.env.VUE_APP_ENDPOINT,
    headers: {
        // 'content-type': '',
        // Authorization: 'Bearer {'+ Store.getters.getToken +'}'
    }
});


HTTP.interceptors.request.use(function (request) {
    const token = localStorage.getItem('japa_token');

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
}, function (error) {
    // alert('ERROR FROM POSTDATA INTERECEPTOR: '+error.response.data);
    return Promise.reject(error.response.data);
});

export default HTTP;
