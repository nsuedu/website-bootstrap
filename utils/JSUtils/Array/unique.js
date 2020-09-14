/*
数组去重
*/
export default class Unique {
    constructor() {

    }
    uniqueByFilter(datas) {
        return datas.filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        })
    }

    uniqueByIndexOf(datas) {
        let res = [];
        datas.forEach((item) => {
            if (res.indexOf(datas[i]) == -1) {
                res.push(datas[i]);
            }
        })
        return res;
    }
    uniqueByReduce(datas) {
        datas.sort();
        // let res = [];
        
        // datas.reduce((pre, cur, index, array) => {
        //     if (pre !== cur) {
        //         res.push(pre);
        //     }
        // })
        // return res;
        let result = datas.sort().reduce((init, current)=>{
            if(init.length===0 || init[init.length-1]!==current){
                init.push(current);
            }
            return init;
        }, []);
        return result;
       
    }
    uniqueBySet(datas) {
        return [...new Set(datas)];//Array.from(new Set(arr))
    }
    uniqueByMap(datas) {
        const seen = new Map()
        return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
    }
    //兼容大多数浏览器
    uniqueByDic(arr) {
        var ret = []
        var hash = {}
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]
            var key = typeof (item) + item
            if (hash[key] !== 1) {
                ret.push(item)
                hash[key] = 1
            }
        }
        return ret
    }
    //判断 一条数据(对象)在数组(由多个对象组成)中是否存在(若存在返回true)
    //去重数组中重复的对象
    hasOwnObject(datas, data) {
        return JSON.stringify(datas).includes(JSON.stringify(data))
    }

}

