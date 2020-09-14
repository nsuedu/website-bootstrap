/**
 * url参数

删除所有参数，
删除指定单个参数
删除指定多个参数

---新增
设置指定多个参数
设置指定单个参数

--修改
设置指定多个参数
设置指定单个参数



获取指定单个参数
获取指定多个参数
获取所有参数

清空url参数，
批量删除url参数， 传数组？ 
 */

export default class UrlParamMethod {
    constructor() {

    }
    //向现有的URL末尾添加查询字符串
    addURLParam(url,name,value){
        url+= (url.indexOf('?')==-1?'?':'&');
        url+=encodeURIComponent(name)+'='+encodeURIComponent(value);
        return url;
    }
    //设置 参数
    setParam(namea, value) {
        let search = location.search,
            pathName = location.pathname,
            newAddress = "",
            reg = new RegExp("(^|)" + name + "=([^&*])(|$)"),
            tmp = name + "=" + value;

        if (reg.test(search)) {
            newAddress = pathName + search.replace(eval(reg), tmp);
        } else {
            if (search.match("[\?]")) { newAddress = pathName + search + "&" + tmp; }
            else { newAddress = pathName + "?" + tmp; }
        }
        history.replaceState({ name: encodeURIComponent(value) }, "title", newAddress)

    }
    //获取指定参数
    getParam(name) {
        if (name !== null && name.toString().length > 0) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            let paramter = window.location.search.substr(1).match(reg);
            if (paramter !== null) {
                return decodeURIComponent(paramter[2]);
            } else { return null; }
        }
    }
    //获取所有参数组成的一个对象
    getParamObject() {
        let qs = location.search.length > 0 ? location.search.substring(1) : "";
        //保存数据的对象
        let args = {};
        //取得每一项
        let items = qs.length ? qs.split("&") : [];
        let item = null, name = null, value = null;
        //逐个将每一项加到对象中
        items.forEach((child) => {
            item = child.split("=");
            name = decodeURI(item[0]);
            value = decodeURI(item[1]);
            if (name.length) { args[name] = value }
        })
        return args;
    }

    //移除参数
    removeParam(name) {
        let search = location.search,
            pathName = location.pathname,
            newAddress = "",
            paramObject = this.getParamObject(),
            isFirst = true;

        if (paramObject[name] !== undefined) {
            delete paramObject[name];
            for (let i in paramObject) {
                if (isFirst) {
                    newAddress = pathName + "?" + i + "=" + paramObject[i];
                    isFirst = false;
                } else {
                    newAddress = pathName + "&" + i + "=" + paramObject[i];
                }
            }
            history.replaceState(paramObject, "title", encodeURIComponent(newAddress))
        }
    }

}