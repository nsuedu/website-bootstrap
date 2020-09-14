//获取元素的左 ，上偏移量

function getElementPosition(element) {
    var actuaLeft = element.offsetLeft;
    var actuaTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actuaLeft += current.offsetLeft;
        actuaTop += current.offsetTop;
        current = current.offsetParent;
    }
    return { x: actuaLeft, y: actuaTop };
}
//获取浏览器窗口宽高, 滚动条占用的空间除外
const getViewPort =function() {
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
//获取浏览器宽高，  包含滚动条

//跨浏览器 获取元素大小
function getBoundingClientRect(element){
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft =document.documentElement.scrollLeft;
    if(element.getBoundingClientRect){
        if(typeof(arguments.callee.offset) !=='number'){
            var temp = document.createElement('div');
            temp.style.cssText = 'position:absolute,left:0,top:0';
            document.body.appendChild(temp);
            arguments.callee.offset= - temp.getBoundingClientRect().top-scrollTop;
            document.body.removeChild(temp)
            temp=null;
        }
        var rect =element.getBoundingClientRect();
        var offset = arguments.callee.offset;
        return {
            left:rect.left+offset,
            right:rect.right+offset,
            top:rect.top+offset,
            bottom:rect.bottom+offset
        }
    }// if(element.getBoundingClientRect)
    else{
        var actuaLeft = getElementPosition(element).x;
        var actuaTop=getElementPosition(element).y;
        return {
            left:actuaLeft-scrollLeft,
            right:actuaLeft+element.offsetWidth-scrollLeft,
            top:actuaTop-screenTop,
            bottom:actuaTop+element.offsetHeight-screenTop
        }
    }
}