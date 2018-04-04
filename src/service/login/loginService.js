
import loginuserDao from '../../dao/loginuserDao.js';
import { promise } from 'is-type-of';
const uuidV1 = require('uuid/v1');

class loginService{

    /**
     * 用户登陆校验
     * 
     * @memberof loginService
     */
    async userLoginService(ctx){
        console.log('进入到了服务层');
        /**
         * 校验
         */
        let userName = ctx.query.userName;
        let passWord = ctx.query.passWord;
        if(userName == '' && passWord == ''){
            return ctx.body = {
                status:100,
                message:'校验失败'
            }
        }
        /**
         * 调用dao层，对数据进行处理
         */
        let result = await loginuserDao.userLoginDao(userName,passWord);
        console.log('看看promise容器到底是什么玩意')
        console.log(result);
        if(result.length){
            let data = {
                status:200,
                info:result,
                message:'登陆成功'
            }
            console.log(ctx.url);
            let options = {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/list',       // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2018-02-30'),  // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
              }
            ctx.cookies.set(
                'cid', 
                'hello world',
                options
            )
            let val = ctx.cookies.get('cid', options) 
            console.log(val);
            ctx.body = data;
        }else {
            let data = {
                status:100,
                info:result,
                message:'登陆失败'
            }
            ctx.body = data;
        }
    }

    async userRegist(ctx){
        /**
         * 判空
         */
        let userName = ctx.query.userName;
        let passWord = ctx.query.passWord;
        if(userName == '' && passWord == ''){
            return ctx.body = {
                status:100,
                message:'不能为空'
            }
        }
        /**
         * 查重
         */
        let reg = await loginuserDao.selectUserByLoginName(userName);
        console.log(reg);
        if (reg.length >= 1) {
            console.log('该账号已经注册！');
            return ctx.body = {
                status:100,
                message:'该账号已经注册'
            }
        }
        console.log('进入了注册的服务层');
        let data = {};
        data.id = uuidV1();
        data.userName = userName;
        data.passWord = passWord;
        
        let result = await loginuserDao.userRegist(data);
        if (result.serverStatus == 2) {
            return ctx.body = {
                status:200,
                message:'注册成功！'
            }
        }
        console.log('添加的后返回的promise是？')
        console.log(result);
    }
}

module.exports = new loginService();