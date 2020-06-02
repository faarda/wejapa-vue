import API from './API';

export default {
    getUser: (context, payload) => {
        return API.post('developer/login', payload)
            .then(res => {
                context.commit('SET_USER', res.data.data);

                return Promise.resolve(true);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }
}