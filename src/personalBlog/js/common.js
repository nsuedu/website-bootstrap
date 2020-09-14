/*
给不会动的标签云 随机添加背景颜色
*/
const tagscloudList = document.getElementsByClassName('tagscloudList')
if(tagscloudList){
    const colors=['#37a7ff','#B0d686','#6cc','#f99','#c9c','#6c9f','#f96','#e6cc6e']
    Array.from(tagscloudList[0].children).forEach(element => {
        const color = colors[Math.floor(Math.random()*colors.length)];
        element.style.backgroundColor = color;
    });
}
