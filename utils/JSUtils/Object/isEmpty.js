//通过 JSON.stringify 判断
function isEmpty0(obj){
    return JSON.stringify(obj)==='{}' ? true :false;
}

//通过循环可遍历的自身属性判断
//1.法只既检测对象本身的属性，不检测从原型继承的属性
function isEmpty1(obj){
    
    for(let item in obj){
        if(obj.hasOwnProperty(item)){
            return false;
        }
    }
    return true;
}


