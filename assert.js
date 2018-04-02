//此页面为断言学习页面
const assert = require("assert");
//1、案例深度相等 deepEqual 对象里不可以包含函数 不测试原型
let data1 = {
    a:{
        b:1
    }
}
let data2 = {
    a:{
        b:1
    }
}
let data3 = {
    a:1,
    b(){
        return '1';
    }
}
let data4 = {
    a:1,
    b(){
        return '1';
    }
}
assert.deepEqual(data1,data2);
// assert.deepEqual(data3,data4,'不相同');



//2、=== 测试原型
// assert.deepStrictEqual({a:1},{a:'1'});

//3 assert.doesNotThrow
// assert.doesNotThrow(() => {
//     throw new TypeError('错误信息');
// },SyntaxError)


//4 assert.equal
console.log('ddd');
assert.equal(1,1);