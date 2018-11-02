import { baseUrl } from '../../config/env'
import axios from 'axios'
import { getStore, removeAllStore } from '../../config/mUtils'
axios.defaults.baseURL = baseUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


//项目列表
export const queryProject = (pageIndex = 1, pageSize = 10,title,startTime,endTime) => axios.get('/api/project/list', {
	params: {
		pageIndex,
		pageSize,
		title,
		startTime,
		endTime
	}
}).then(function (res) { 
	return res.data;
}).catch(function (err) { 
	console.log(err)
	})





// axios 拦截器token校验
axios.interceptors.request.use(
	config => {
		//var xtoken = getStore('token');
		//config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		var xtoken = 'ce615f7bc3b144f5a2f27c4ecf2a1d22'; //本地模拟token
		// axios 设置token 不能使用['token']的形式 必须使用.token的方式
		if(xtoken != null){
			config.headers['token']  = xtoken;
		}
		if(config.method=='post'){
			config.data = {
				...config.data,
				_t: Date.parse(new Date())/1000,
			}
		}else if(config.method=='get'){
			config.params = {
				_t: Date.parse(new Date())/1000,
				...config.params
			}
		}
		return config
	},function(error){
		return Promise.reject(error)
	}
)
axios.interceptors.response.use(function (response) {
	var tokenId = getStore('token');
	console.log('interceptors.response', response)
// token 已过期，重定向到登录页面
	if (response.data.code == '-1024') {
		removeAllStore();
		this.router.push('/login')
		//var _self = this;
	}
	return response
}, function (error) {
// Do something with response error
	loadingInstance.close();	
	return Promise.reject(error)
})