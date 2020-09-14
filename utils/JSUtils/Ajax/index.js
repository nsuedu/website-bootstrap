/*
----------------------封装原生ajax
可以支持IE早期版本的XHR
使用: var xhr = createXHR(); 
*/
function createXHR() {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest;
    } else if (typeof ActiveXObject !== 'undefined') {
        if (typeof ActiveXObject.caller.activeXString !== 'String') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'], i, len;

            for (i = 0; i < versions.length; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i]
                    break
                } catch (error) {

                }
            }
            return new ActiveXObject(arguments.callee.activeXString)
        } else {
            throw new Error('XHR对象不存在')
        }
    }
}
/*
process事件实现进度条
*/
function createProgressBar(){
    var xhr = createXHR();
    xhr.onload=function(event){
        if(xhr.status>=200&&xhr.status<300||xhr.status==304){
            console.log(xhr.responseText);
        }else{
            console.log('请求失败: '+xhr.status)
        }
    };

    xhr.onprogress=function(event){
        let divStatus =document.getElementById('status');
        if(event.lengthComputable){
            divStatus.innerHTML = '已接收'+event.position+'/'+event.totalSize;
        }
    };
    xhr.open('get','请求的地址',true);
    xhr.send(null);
}
/*
跨浏览器的CORS
*/
function createCORSRequest(method,url){
    var xhr = createXHR();
    //一般浏览器
    if('withCredentials' in xhr){
        xhr.open(method,url,true)
    }
    //IE
    else if(typeof XDomainRequest!='undefined'){
        xhr = new XDomainRequest();
        xhr.open(method,url)
    }else { xhr = null }
    return xhr;
}
var request = createCORSRequest('get','http://www.baidu.com')
if(request){
    request.onload=function(){
        //request.responseText
    }
    request.send(null);
}