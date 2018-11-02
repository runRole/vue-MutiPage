/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 */

 //let baseUrl = "http://10.0.0.156:8009";
//let baseUrl = "http://localhost:8009";
let baseUrl = 'http://testdesertcmsback.youtiantouzi.com'
//let baseUrl = "http://10.0.0.139:8009";
//let baseUrl = '';
if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = 'http://testdesertcmsback.youtiantouzi.com'
	//baseUrl = 'http://desertback.youtiantouzi.com'
}

export {
	baseUrl,
}
