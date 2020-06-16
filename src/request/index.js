import VueAxios from 'vue-axios'
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import Vue from 'vue'
import store from '../store/index'
import cacheTypes from '../common/constants'
import types from '../store/mutation-type'
import storage from '../utils/storage'

Vue.use(VueAxios, axios)

// const dev = 'http://localhost:8195'
const comDev = 'http://192.168.1.6:8195'

const request = axios.create({
    baseURL: comDev,
    responseType: 'json',
    validateStatus (status) {
        return status == 200
    }
})

request.interceptors.request.use((config) => {
    if (store.getters.getToken) {
        config.headers[cacheTypes.AUTH_TOKEN] = store.state.token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use(response => {
    let token = response.headers[cacheTypes.AUTH_TOKEN]
    if (token) {
        store.commit(types.SET_TOKEN, {
            token: token
        })
    }
    let code = response.data.code
    switch (code) {
        case 301:
        case 302:
            Message({
                type: 'info',
                message: '小饼干通知：暂时找不到客官的东西啦！'
            })
            break
        case -100:
        case -101:
            Message({
                type: 'warning',
                message: '小饼干通知: 客官令牌出现状况啦！',
                onClose () {
                    console.log('token 过期')
                    storage.remove()
                }
            })
            break
        case -200:
            Message({
                type: 'warning',
                message: '小饼干通知：哦豁，暗号对不上啦!'
            })
            break
        case -500:
            Message({
                type: 'warning',
                message: '小饼干通知: 客官你已经被逐出师门，江湖不见！'
            })
            break
        case 500:
            Message({
                type: 'warning',
                message: '小饼干通知: 程序出错啦，已经在杀程序员祭天了!'
            })
            break
    }
    return response
}, (error) => {
    if (error.response && error.response.status == 401) {
        Message({
            type: 'warning',
            message: '小饼干通知: 客官没有权限访问！'
        })
    } else {
        Message({
            type: 'warning',
            message: '小饼干通知: 服务器出现故障，已经在打程序员了！'
        })
    }
})

const http = {
    get: (url, params) => {
        return new Promise((resolve, reject) => {
            request.get(url, {
                params: params
            }).then(res => {
                resolve(res ? res.data : {body: null})
            }, (error) => {
                reject(error)
            })
        })
    },
    post: (url, params) => {
        return new Promise((resolve, reject) => {
            request.post(url, qs.stringify(params)).then(res => {
                console.log(res)
                resolve(res ? res.data : {body: null})
            }, (error) => {
                reject(error)
            })
        })
    },
    put: (url, params) => {
        return new Promise((resolve, reject) => {
            request.put(url, qs.stringify(params)).then(res => {
                resolve(res ? res.data : {body: null})
            }, (error) => {
                reject(error)
            })
        })
    },
    delete: (url, params) => {
        return new Promise((resolve, reject) => {
            request.delete(url, {
                params: params
            }).then(res => {
                resolve(res ? res.data : {body: null})
            }, (error) => {
                reject(error)
            })
        })
    }
}

export default http

