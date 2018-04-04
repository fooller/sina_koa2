import {
    util,
    mysql,
    getsql,
} from '../tool';
import {
    error
} from 'is-type-of';



class loginUser {
    /**
     * 查询单挑数据
     * @returns 
     * @memberof loginuser
     */
    async findUserInfo() {
        console.log('进入了数据处理层');
        let sql = getsql.SELECT({
            table: 'user',
            sort: 'id',
            isdesc: true,
        });
        return await mysql(sql);
    }
    // 新增图片
    async addPhoto(filePath){
        console.log('进入了dao层');
        let sql = 'insert into image (`image`) values ("'+ filePath + '+")';
        return await mysql(sql);
    }
    // 图片列表查询
    async findFiles(file){
        console.log('进入了图片查询的方法');
        let sql = 'select * from files';
        let obj =  await mysql(sql);
        return obj;
    }

    //新增文件
    async saveFile(file){
        console.log(file);
        let sql = 'insert into files ( `id`,`filename`,`filepath`,`filetype`) values ("' + file.id +'","'+ file.name + '","' + file.path + '","' + file.type + '")';
        console.log(sql);
        return await mysql(sql);
    }
    //删除文件
    async delFile(file){
        console.log(file.id);
        let sql = 'delete from files where id = "' + file.id + '"';
        console.log(sql);
        return await mysql(sql);
    }
}

module.exports = new loginUser();