
const rocket =document.getElementsByClassName('rocket')[0];

let timer=null;
//获取屏幕的高度
var pagelookheight = document.documentElement.clientHeight;

window.onscroll = function () {
    var backtop = document.body.scrollTop !== 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    if (backtop >= pagelookheight) {
        rocket.style.display = "block";
    }
    else if(backtop==0){
        rocket.style.display = "none";
        rocket.classList.remove("flyingClass");
        cancelAnimationFrame(timer);
    }
}
rocket.addEventListener('mouseover', () => {
    rocket.classList.remove("flyingClass");
    rocket.classList.add("fireClass");
})
rocket.addEventListener('mouseout', () => {
    rocket.classList.remove("fireClass");

})
rocket.addEventListener('click', () => {
    rocket.classList.remove("fireClass");
    rocket.classList.add("flyingClass");

    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop !== 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 20;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });


})