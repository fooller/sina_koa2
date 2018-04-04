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
        let sql = "select * from user where loginname = '" + userName + "' and " + "password = '" + passWord + "'";
        console.log('进入到了dao层');
        return await mysql(sql);
    }

    /**
     * 用户注册
     * @returns 
     * @memberof loginUserDao
     */
    async userRegist(data){
        let json = {};
        json.table = 'user';
        json.fields = [{id:data.id},{loginname:data.userName},{password:data.passWord}];
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
        let sql = "select * from user where binary loginname = '" + userName + "'";
        return mysql(sql);
    }
}

module.exports = new loginUserDao();