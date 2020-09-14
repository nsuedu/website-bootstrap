var is = function (obj, type) {
    var toString = Object.prototype.toString, undefined;
    return (type === "Null" && obj === null) ||
        (type === "Undefined" && obj === undefined) ||
        toString.call(obj).slice(8, -1) === type;
};

dom.deepCopy = function (result, source) {
    for (var key in source) {
        var copy = source[key];
        if (source === copy) continue;//如window.window === window，会陷入死循环，需要处理一下
        if (dom.is(copy, "Object")) {
            result[key] = arguments.callee(result[key] || {}, copy);
        } else if (dom.is(copy, "Array")) {
            result[key] = arguments.callee(result[key] || [], copy);
        } else {
            result[key] = copy;
        }
    }
    return result;
};

//深复制，开辟新的内存区

//方法一：slice,原理：slice返回一个新数组  深拷贝？？？？
let deepArr = [1, 2, 3];
let deepArr1 = deepArr.slice(0);
deepArr1[1] = 'test';
console.log('deep copy: ' + deepArr + " " + deepArr1);   //deep copy: 1,2,3 1,test,3

//方法二：concat，原理：concat返回一个新数组  深拷贝？？？？
let deepArr2 = [1, 2, 3];
let deepArr3 = deepArr2.concat();
deepArr3[1] = 'test';
console.log('deep copy: ' + deepArr2 + " " + deepArr3);   //deep copy: 1,2,3 1,test,3




// 递归实现一个深拷贝
function deepClone(source){
   if(!source && typeof source !== 'object'){
     throw new Error('error arguments', 'shallowClone');
   }
   var targetObj = source.constructor === Array ? [] : {};
   for(var keys in source){
      if(source.hasOwnProperty(keys)){
         if(source[keys] && typeof source[keys] === 'object'){
           targetObj[keys] = source[keys].constructor === Array ? [] : {};
           targetObj[keys] = deepClone(source[keys]);
         }else{
           targetObj[keys] = source[keys];
         }
      } 
   }
   return targetObj;
}
// test example
var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  func: function(){
    return 1;
  }
};
var o3 = deepClone(o1);
console.log(o3 === o1); // => false
console.log(o3.obj === o1.obj); // => false
console.log(o2.func === o1.func); // => true


/* ================ 深拷贝 ================ */
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];

        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }

        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            arguments.callee(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}

//直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。
/* ================ 深拷贝 ================ */
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];

        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }

        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}


  