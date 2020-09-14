/*
类型检测
*/

function isArray(value){
    return Object.prototype.toString.call(value=='[object Array]')
}
function isFunction(value){
    return Object.prototype.toString.call(value=='[object Function]')
}
function isRegExp(value){
    return Object.prototype.toString.call(value=='[object RegExp]')
}
function isNativeJSON(value){
    return window.JSON&&Object.prototype.toString.call(value=='[object JSON]')
}
/*
bind的实现
*/
function bind0(fn,context){
    return function(){
        return fn.apply(context,arguments);
    }
}
//通过函数柯理化实现
function bind(fn,context){
    var args = Array.prototype.call(arguments,2);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs)
        return fn.apply(context,finalArgs);
    }
}