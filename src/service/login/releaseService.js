import releaseDao from '../../dao/releaseDao.js';
import file from '../common/file.js';


class releaseService {

    /**
     * 保存发布内容
     * @param {保存服务} ctx 
     */
    async insertRelease(ctx) {
        console.log(ctx.request.body);
        let data = {};
        let result = {};
        let fields = ctx.request.body.fields;
        data.content = fields.content;
        data.userId = fields.userId;
        await file.saveFile(ctx).then(res => {
            console.log('这个res是sm' + res);
            if (!res) {
                data.filesId = 'null';
            } else {
                data.filesId = res.data.filesId;
            }
        });
        result = await releaseDao.saveRelease(data);
        if (result.serverStatus == 2) {
            ctx.body = {
                status:200,
                message:'保存成功！'
            }
        } else {
            ctx.body = {
                status:100,
                message:'保存失败！'
            }
        }
        return ctx;
    }

    async selectReleaseAllUserList(ctx){
        let result = {}
        result = await releaseDao.findReleaseAllUserSortByTime();
        result.status = 200;
        return ctx.body = result;
    }

}
module.exports = new releaseService();