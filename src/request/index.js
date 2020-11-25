import axios from 'axios';
import store from '../store';
import router from '../routes';
import { Message } from 'element-ui';

// axios.defaults.baseURL="https://5b5e71c98e9f160014b88cc9.mockapi.io/"
axios.defaults.baseURL = '/apc'
axios.defaults.timeout=60000;
// 引用axios，设置头文件
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    Message({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;

                // 404请求不存在
                case 404:
                    Message({
                        message: '网络请求不存在',
                        duration: 1500,
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Message({
                        message: error.response.data.message,
                        duration: 1500,
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

export const request = (url,data,method = "GET") => {
    return new Promise((resolve,reject)=>{
        axios({
            url,
            method,
            data: method ==="GET" ? null : data,
            params: method ==="GET" ? JSON.stringify(data) : null,
            withCredentials: true
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}