
// 使首页右侧作者栏与轮播图高度相同
const carousel_container=document.getElementById('carousel-container');
const author_right =document.getElementsByClassName('author_right')[0];
author_right.style.height = carousel_container.offsetHeight+'px';
window.onresize=()=>{
    author_right.style.height = carousel_container.offsetHeight+'px';
}



const translateBtn = document.getElementsByClassName('translateBtn')[0];
const poetry_translate =document.getElementsByClassName('poetry_translate');

translateBtn.setAttribute('isShowTranslate', 'false');

translateBtn.addEventListener('click', (e) => {
    if (translateBtn.getAttribute('isShowTranslate') == 'false') {
        translateBtn.setAttribute('isShowTranslate', 'true');
        translateBtn.innerHTML=`<img src="../images/yipic2.png" width="25px" height="25px" alt="" srcset="">`;
        [...poetry_translate].forEach(element => {
            element.style.display='block'
        });
      
    } else {
        translateBtn.setAttribute('isShowTranslate', 'false');
        translateBtn.innerHTML=`<img src="../images/yipic.png" width="25px" height="25px" alt="" srcset="">`;
        [...poetry_translate].forEach(element => {
            element.style.display='none'
        });
    }


})