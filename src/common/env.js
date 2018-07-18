/*
 * 配置编译环境和线上环境之间的切换
 * 以及静态变量
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */
let baseUrl = '';
let routerMode = 'history';
let DEBUG = false;
let cancleHTTP = [];//取消请求头设置；
if (process.env.NODE_ENV == 'development') { //生产环境走的地址
//	baseUrl = "../GetTravelMethod";
	baseUrl = "https://10.248.65.205/travel-app-web/GetTravelMethod";
	DEBUG = true;
}else if(process.env.NODE_ENV == 'production'){  //测试环境地址
//	baseUrl = "../GetTravelMethod";    //相对路径
	baseUrl = "https://erpmonitor.sinopec.com/travel-app-web/GetTravelMethod";   //测试地址
	DEBUG = false;
}else if(process.env.NODE_ENV == 'testing'){  //测试环境地址
//	baseUrl = "../GetTravelMethod";    //相对路径
	baseUrl = "https://erpmonitor.sinopec.com";   //测试地址
	DEBUG = false;
}

export{
	baseUrl,
	routerMode,
	DEBUG,
	ROLE,
	cancleHTTP
}