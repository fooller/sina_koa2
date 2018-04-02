 var createProxyFactory = function (fn) {
     var cache = {}; // 缓存 - 存放参数和计算后的值
     return function () {
         var args = Array.prototype.join.call(arguments, "-");
         console.log(args);//1-2-3-4
         if (args in cache) { // 判断出入的参数是否被计算过
             console.log("使用缓存代理");
             return cache[args];
         }
         return cache[args] = fn.apply(this, arguments);
     }
 }
 // 计算乘积
 var mult = function () {
     var a = 1;
     for (var i = 0, l = arguments.length; i < l; i++) {
         a = a * arguments[i];
     }
     return a;
 }
 var proxyMult = createProxyFactory(mult)
 var args = Array.prototype.join.call(arguments, "-");
 console.log(args);
 console.log(proxyMult(1, 2, 3, 4)); // 输出： 24
 console.log(proxyMult(1, 2, 3, 4)); // 输出： 缓存代理 24