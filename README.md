# 新浪微博koa2


### 技术栈 koa2+gulp+mysql （对应的前端页面请github搜索，sina_vue)

## 项目通过gulp-nodemon 实时编译刷新node服务

## 功能目录
```
	1、登陆、注册、修改密码
```
## 项目目录结构
```
	assets    
	build 
		server.js     		项目启动文件 babel 编译
	dist   					打包好的项目文件	
	logs                	pm2运行时生成的日志文件
	noode_modules      
	src
		
		dao                 操作数据库
			loginuserDao.js 用户查询、插入、修改loginuser表
			
		routers     
			index.js    	路由入口文件
			login.js    	配置前台访问的url
			......
		service	
			login(业务逻辑处理层)
				loginService.js
							(处理登陆、注册、修改的业务) 
			......
		tool
			index.js    	入口文件
			getsql.js   	对mysql 的增删改查 语句的封装
			mysql.js    	mysql配置文件
			util.js     	工具函数
	.babelrc
	.gitignore
	gulpfile.js         	gulp配置
	package.json
	pm2.config.json     	pm2配置
	README.md		

```
### mysql数据库
```
创建数据库
CREATE DATABASE `login` 
创建三张表
CREATE TABLE `files` (
  `filetype` varchar(255) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `filepath` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `release` (
  `content` varchar(10000) NOT NULL,
  `time` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `files_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8

CREATE TABLE `user` (
  `id` varchar(255) DEFAULT NULL,
  `loginname` varchar(255) DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8

```

### 说明

```
	项目使用babel编译
	项目通过gulp-nodemon 实时编译刷新node服务
	提供了mysql的封装函数 和案例 （我自己开发使用时做的）
	提供了邮件发送 nodemailer 配置
	提供了七牛云上传JDK

```



## 运行方式
```
	开发环境：npm run dev

	打包：npm run build

	启动项目：npm run server

	pm2启动方式：npm run pm2

```




