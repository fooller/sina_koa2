import path from 'path'

// 系统配置
export let SYSTEM = {
	//允许调用接口的域名，用来检测防盗链
	ORIGIN: 'http://127.0.0.1:18080',

	// HTTP服务器端口号
	PROT: 18080,
	
	// 分页条数
	PAGESIZE: 20,

	DEBUG: false,

	// 七牛云根路径
	BASEIMG: 'http://xxx.bkt.clouddn.com/',

	// 后台登录账号和密码  （可替换为数据库用户密码登录方式）
	USERMSG:{
		USERNAME:'admin',
		PASSWORD:'123456789'
	}

}

export let DB = {
	// 服务器地址
	HOST: 'localhost',

	// 数据库端口号     
	PROT: 3306,

	// 数据库用户名              
	USER: 'root',

	// 数据库密码    
	PASSWORD: '',

	// 数据库名称    
	DATABASE: 'login',

	// 默认"api_"
	PREFIX: ''
}

export let NODEMAILER = {
	// SMTP服务提供商域名
	HOST: '163',
	// 用户名/用户邮箱
	USER: 'zhou8337626@163.com',
	// 邮箱密码
	PASSWORD: '',
}