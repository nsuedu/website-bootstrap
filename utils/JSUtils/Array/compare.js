/*
数组比较的一些方法
使用 
const arrayCompare = new Compare();
arr.sort(arrayCompare.compareNormal())
*/

class Compare {
    constructor() {

    }
    
    compareNormal(value1, value2) {
        if (isNaN(value1) == false && isNaN(value2) == false) {
            return value1 - value2;
        }
    }
    //升序
    compareToMax(value1, value2) {
        if (isNaN(value1) == false && isNaN(value2) == false) {
            if (value1 < value2) {
                //在排序后的数组中 value1 应该出现在 value2 之前,返回一个负数
                return -1
            } else if (value1 > value2) {
                return 1
            } else { return 0 }
        }
    }

    //降序
    compareToMin(value1, value2) {
        if (isNaN(value1) == false && isNaN(value2) == false) {
            if (value1 < value2) {
                //在排序后的数组中 value1 应该出现在 value2 之后,返回一个正数
                return 1
            } else if (value1 > value2) {
                return -1
            } else { return 0 }
        }
    }
    //倒序
    compareToReverse(arr) {
        if (Array.isArray(arr)) {
            return arr.reverse();
        }
    }
    //乱序
    shuffle(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            var idx = Math.floor(Math.random() * (len - i));
            var temp = arr[idx];
            arr[idx] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr;
    }
    //比较对象中的某一个属性
    createComparisonFunction(prop) {
        return function (obj1, obj2) {
            let val1 = obj1[prop];
            let val2 = obj2[prop];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1
            } else { return 0 }
        }
    }
}