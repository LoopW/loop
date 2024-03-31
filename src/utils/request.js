import axios from "axios";
import { Toast } from 'vant';
import { getToken } from "@/utils/auth";
import { store } from "@/store";
import { Dialog } from 'vant';
import { router } from '@/router'

// 创建实例
const instance = axios.create({
  baseURL: '',  // process.env.VUE_APP_BASE_API
  timeout: 500000,
  headers: { "Content-Type": "application/json" },
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // config包括请求的信息 包括baseurl 请求数据data 请求类型 超时 请求路径等信息
    // console.log(config)
    const token = getToken()
    if (token) {
      config.headers.Authorization = getToken()
    }
    //暂时用固定token
    // config.headers.token = "$2a$10$FwL3KjEPX5hOS.QfFfWnOep5I4oZiekHxpKskiuju2chY8ow2Sjc4e"
    return config
    // Toast.loading({
    //   message: "加载中...",
    //   forbidClick: true,
    //   loadingType: 'circular',
    //   duration: 0
    // });
    // 在发送请求之前做些什么
    // return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  // response => {
  //   Toast.clear();
  //   if (response.data.Code === 0) {
  //     if (response.data.Msg == "权限校验失败") {
  //       Dialog.alert({
  //         title: '提示',
  //         message: '账号登录异常，请重新登录',
  //         confirmButtonColor: "#4898ff",
  //       }).then(() => {
  //         store.dispatch('layoutLogin').then(() => {
  //           router.replace("/Login");
  //         })
  //       });
  //     }
  //   }
  //   return response.data
  // },

    response => {
      // response包括 config发送的配置信息，返回的数据data status状态码等信息
      // console.log(response)
      if (response.data.code == 401) {
        setTimeout(()=>{
          router.push("/page1")
        },1000)
      }
      //拦截响应，做统一处理
      return response.data
    },
  err => {
    Toast.clear();
    switch (err.response.status) {
      case 400:
        Toast.fail('请求出错');
        break;
      case 401:
        Toast.fail('授权失败，请重新登录');
        return;
      case 422:
        Toast.fail('参数错误，请检查填写的参数');
        return;
      case 403:
        Toast.fail('拒绝访问');
        break;
      case 404:
        Toast.fail('请求错误,未找到该资源');
        break;
      case 405:
        Toast.fail('请求方式错误');
        break;
      case 500:
        Toast.fail('服务器错误');// 此处可以换成接口返回的报错信息
        break;
    }
    return Promise.reject(err.data);
  })

export default instance
