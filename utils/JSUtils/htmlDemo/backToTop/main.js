//获取浏览器窗口宽高, 滚动条占用的空间除外
const getViewPort = function () {
    if (document.compatMode == 'BackCompat') {
        return {
            width: document.body.clientWidth,
            heigth: document.body.clientHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            heigth: document.documentElement.clientHeight
        }
    }
}

/*
    取窗口滚动条高度 
*/
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

window.onscroll = function () {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个　　
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    　　//scrollTop就是触发滚轮事件时滚轮的高度
    let scrollHeight=document.documentElement.scrollHeight;
    if (scrollTop>300) {
        console.log('可以出现按钮了');
    }
   
}