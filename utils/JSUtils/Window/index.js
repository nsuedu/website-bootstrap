class WindowMethod {
    constructor() {

    }

    getPosition() {
        /*跨浏览器取得 窗口 左边上边的位置
        IE, safira, Opera, chrome  :screenLeft screenTop
        Firefox,  safira, chrome:screenX  screenY
        */
        let leftPos = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX;

        let topPos = (typeof window.screenTop == 'number') ? window.screenTop : window.screenY;
        return { leftPos, topPos }
    }
    getPageSize() {
        /*
        跨浏览器取得页面视口的大小
        
        */
        let pageWidth = window.innerWidth,
            pageHeight = window.innerHeight;

        if (typeof pageWidth != 'number') {
            if (document.compatMode == 'CSS1Compat') {
                pageWidth = document.documentElement.clientWidth;
                pageHeight = document.documentElement.clientHeight;
            } else {
                pageWidth = document.body.clientWidth;
                pageHeight = document.body.clientHeight;
            }
        }
        return { pageWidth, pageHeight }
    }
    /*
    检测浏览器是否安装了特定的插件 IE无效
    使用  hasPluginNoIE('Flash')
    */
    hasPluginNoIE(name) {
        name = name.toLowerCse();
        navigator.plugins.forEach(item => {
            if (item.name.toLowerCse().includes(name)) {
                return true;
            }
        });
        return false;
    }
    /*
    检测IE中的插件
    使用：检测flash hasIEPlugins('ShockwaveFlash.ShockwaveFlash')
    */
    hasIEPlugins(name) {
        try {
            new ActiveXObject(name);
            return true;
        } catch (error) {
            return false;
        }
    }
    /*
    检测插件的通用方法: 将上面两种方式结合起来
    使用方式 hasPlugins('Flash','ShockwaveFlash.ShockwaveFlash');
    */
    hasPlugins(name, fullName) {
        let result = this.hasPluginNoIE(name);
        if (!result) {
            result = this.hasIEPlugins(fullName);
        }
        return result;
    }





}









/*
检测浏览器是否安装了特定的插件
*/