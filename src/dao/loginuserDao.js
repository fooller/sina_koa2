import {
    util,
    mysql,
    getsql,
} from '../tool';

class loginUserDao{
    /**
     * 用户登陆
     * @param {any} userName 
     * @param {any} passWord 
     * @returns 
     * @memberof loginUserDao
     */
    async userLoginDao(userName,passWord){
        let sql = "select * from loginuser where loginname = '" + userName + "' and " + "password = '" + passWord + "'";
        console.log('进入到了dao层');
        console.log(sql);
        return await mysql(sql);
    }

    /**
     * 用户注册
     * @param {any} userName 
     * @param {any} passWord 
     * @returns 
     * @memberof loginUserDao
     */
    async userRegist(userName,passWord){
        let json = {};
        json.table = 'loginuser';
        json.fields = [{loginname:userName},{password:passWord}];
        let sql = getsql.INSERT(json);
        console.log('执行的sql：'+ sql);
        return await mysql(sql);
    }

    /**
     * 根据用户名查询用户
     * 
     * @param {any} userName 
     * @returns 
     * @memberof loginUserDao
     */
    async selectUserByLoginName(userName){
        let sql = "select * from loginuser where binary loginname = '" + userName + "'";
        return mysql(sql);
    }
}

module.exports = new loginUserDao();