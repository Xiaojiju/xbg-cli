import http from './index';

export function login(username, password) {
    return http.post('/admin/login', {
        username: username,
        password: password
    })
}