import demo from '../../dao/demo.js';
import {
    Buffer
} from 'buffer';
import { resolve } from 'path';
const fs = require('fs');
const os = require('os');
const path = require('path');
const uuidV1 = require('uuid/v1');

class file {
    // 获取用户名和密码
    async getLoginName(ctx) {
        let result;
        try {
            await demo.findUserInfo().then(res => {
                result = res;
            });
            ctx.body = result;
        } catch (err) {
            console.log(err)
            return ''
        }
    }
    /**
     * 保存文件的方法
     * @return fileObj
     * @param {any} ctx 
     * @memberof file
     */
    async saveFile(ctx) {
        let fileObj;
        let file = ctx.request.body.files.file;
        if (!file) {
            return null;
        }
        console.log('开始保存文件=========================');
        let filePath = path.join(path.resolve('src/uploads/images'), file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        fileObj.id = uuidV1();
        fileObj.name = file.name;
        fileObj.path = filePath;
        fileObj.type = '0';
        try {
            await demo.saveFile(fileObj).then(res => {
                console.log('返回文件对象===================')
                console.log('文件编号：'+ fileObj.id);
                console.log('文件名称：'+ fileObj.name);
                return fileObj;
            })
        } catch (error) {
            console.log('保存文件出错================')
            console.log(error);
        }
    }

    // 查询图片服务
    async findFiles(ctx) {
        console.log('进入图片查询服务层');
        let result = [];
        try {
            await demo.findFiles().then(res => {
                let obj;
                for (let val of res) {
                    let read = fs.readFileSync(val.filepath,"base64");
                    let data = "data:image/jpeg;base64,"+read;
                    val.url = data;
                    val.name = val.filename;
                    result.push(val);
                }
            })
            console.log('开始执行ctx.body');
            // console.log(result);
            ctx.body = result;
        } catch (error) {

        }
    }
    // 删除文件
    async delFile(ctx){
        console.log('开始删除');
        console.log(ctx.request.query);
        let data = {
            id:ctx.request.query.id
        }
        let result;
        try {
            await demo.delFile(data).then(res => {
                result = res;
            })
        } catch (error) {
            result = error;
        }
        ctx.body = result;
    }
    // 没用上 尴尬了....
    async saveFiles(ctx) {
        let array = [];
        let files = ctx.request.body.files.file;
        let path = path.resolve('src/uploads/images');
        for ( let file of files ){
            //进行读写文件，并且封装对象
            let obj = {};
            let filePath = path.json(path,file.name);
            let reader = fs.createReadStream(file.path);
            let writer = fs.createWriteStream(filePath);
            reader.pipe(writer);
            obj.id = uuidV1();
            obj.name = file.name;
            obj.path = filePath;
            obj.type = '0';
            array.push(obj);
            try {
                console.log('开始新增');
                await demo.saveFile(obj);
            } catch (e) {
                
            }
        }
        console.log(array);
        ctx.body = {
            status:200,
            message:'success'
        }
    }
}

module.exports = new file();