import axios from 'axios'
import { getToken } from '../utils/cookie'

export default function (config) {
    const ins = axios.create({
        baseURL: 'http://127.0.0.1:7001'
    })

    // 添加请求拦截器
    ins.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        config.headers.Authorization = 'Bearer ' + getToken()
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    return ins(config)
}