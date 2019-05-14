import axios from 'axios'

export const signUp = newUser => {
    return axios
        .post('/users', {
            name: newUser.name,
            password: newUser.password,
            email: newUser.email,
            hasAgreed: newUser.hasAgreed,
        })
        .then(res => {
            console.log('Registered!')
        })
};

export const signIn = user => {
    return axios
        .post('users/sign-in', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
};

