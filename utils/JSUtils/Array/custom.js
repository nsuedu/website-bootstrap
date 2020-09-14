
// 模拟 indexOf 方法  除了indexOf 自己写代码实现 查找数组某个元素的位置


// 模拟filter方法
Array.prototype.myFilter = function (func) {
    let newArray = [];
    this.forEach((item) => {
        if (!func(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}
// 模拟 find方法
Array.prototype.myFind = function (func) {
    let newArray = [];
    this.forEach((item) => {
        if (func(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}
//统计数组中 相同项的个数
let getNumberForCommon = function (datas) {
    if (Array.isArray(datas) && datas.length > 0) {
        return datas.reduce((obj, name) => {
            obj[name] = obj[name] ? ++obj[name] : 1;
            return obj;
        }, {})
    } else { throw new Error('请传入一个长度大于0的数组') }

}
//将二维数组转化为一维
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
    return a.concat(b);
}, []);

// 栈方法  取出数组的最后一项
Array.prototype.lifoMethod = function (beforeParam, afterParam) {
    this.push(beforeParam);
    return this.pop();
}

// 队列方法  取出数组的第一项
Array.prototype.fifoMethod = function (beforeParam, afterParam) {
    this.push(beforeParam);
    return this.shift();
}