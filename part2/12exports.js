// console.log(module);    // 输出module对象

module.exports.username = 'zhangsan'
module.exports.age = 23
module.exports.sayHello = function () {
    console.log('hello');
}

module.exports = {
    nickname:'小黑',
    sayHi(){
        console.log('Hi');
    }
}