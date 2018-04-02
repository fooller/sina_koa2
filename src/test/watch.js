let byWatch = {
    message:{},
    // 注册
    register:function(type,fn){
        if (this.message[type]) {
            this.message[type].push(fn);
        }else {
            this.message[type]=[fn];
        }
    },
    // 发布
    fire:function(type,opt){
        if (!this.message[type]) {
            return false;
        }
        this.message[type].forEach(item => {
            item(opt);
        });
    },
    // 解耦
    remove(type,fn){
        let i = this.message[type].indexOf(fn);
        if (this.message[type] || i == -1) {
            return false;
        }
        this.message[type].splice(i,1);
    }
}

function tongzhi1(data){
    console.log('打印输出1');
    console.log(data);
}

function tongzhi2(data){
    console.log(data)
}

byWatch.register('tongzhi',tongzhi1);
byWatch.register('tongzhi',tongzhi2)
byWatch.fire('tongzhi','今晚吃鸡，大吉大利');