
import {
    util,
    mysql,
    getsql,
} from '../tool';

class releaseDao{

    /**
     * @param {保存单元} data 
     */
    async saveRelease(data){
        let json = {};
        json.table = '`release`';
        json.fields = [{user_id:data.userId},{files_id:data.filesId},{content:data.content},{time:''}];
        let sql = getsql.INSERT(json);
        console.log(sql);
        return mysql(sql);
    }
    
    /**
     * 删除一条信息
     * 毕传字段：
     *          user_id、id
     * @param {any} data 
     * @returns 
     * @memberof releaseDao
     */
    async deleteRealse(data){
        let json = {};
        json.table = 'release';
        json.wheres = [{user_id:data.userId},{id:data.id}];
        let sql = getsql.DELETE(json);
        return mysql(sql);
    }
    /**
     * 需求：查询该用户所有的数据
     * 根据user_id查询，针对time进行排序 并且倒叙
     * 毕传字段：
     *          userId
     * @param {any} data 
     * @memberof releaseDao
     */
    async findReleaseByUserIdSortByTime(data){
        let sql = "select * from `release` where user_id ='" + data.userId + "' order by time desc"
        return mysql(sql);
    }

    /**
     * 需求：查询所有用户的数据
     * 查询所有数据根据日期进行倒叙
     */
    async findReleaseAllUserSortByTime(){
        let sql = "select * from `release` order by time desc";
        return mysql(sql);
    }
}
module.exports = new releaseDao();