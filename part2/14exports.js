/**
 * 由于module.exports单词写起来比较复杂，
 * 为了简化向外共享成员的代码，Node提供了exports对象。
 * 默认情况下，exports和module.exports指向同一个对象。
 * 最终共享的结果，还是以module.exports指向的对象为准。
 */

console.log(exports);
console.log(module.exports);
console.log(exports===module.exports)

exports.username = 'zhangsan'
exports.age = 23
exports.sayHi = function (){
    console.log('hi');
}

module.exports = {      // 最终，向外共享的结果，永远都是module.exports所指向的对象
    username: 'lisi',
    age: 10,
    sayHello: function (){
        console.log('hello');
    }
}