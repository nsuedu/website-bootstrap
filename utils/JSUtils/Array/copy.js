/*请先了解深浅拷贝的区别

//浅拷贝直接赋值即可，就不说了

//深拷贝  concat  slice  for
//深拷贝嘛，简单点就是:创建一个与原来数组相同的新数组
*/
let arrayDeepCopy = function (arr) {
    let result = [];
    if (Array.isArray(arr)) {
        //1. result= [].concat[arr]
        //2.  result= arr.slice(0)
        //3. result= arr.map((item)=>item)
        //4. 
        result = [...arr]
    } else {
        throw new Error('请传入一个数组')
    }
    return result
}
