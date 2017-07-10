// 如果Object方法的参数是一个对象，它总是返回原对象。
// var arr = [];
// Object(arr) // 返回原数组
// Object(arr) === arr // true

// var obj = {};
// Object(obj) // 返回原对象
// Object(obj) === obj // true

// var fn = function () {};
// Object(fn) // 返回原函数
// Object(fn) === fn // true
// 利用这一点，可以写一个判断变量是否为对象的函数。
function isObject(value) {
   return value === Object(value);
}

// isObject([]) // true
// isObject(true) // false
// 判断数值数据类型
function type(o) {
    var toString = Object.prototype.toString;
    return toString.call(o).match(/\[object (.*?)\]/)[1].toLowerCase();
}
