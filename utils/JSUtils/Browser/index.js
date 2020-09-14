function getBrowser() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = parseFloat(s[1]) :
        (s = ua.match(/msie:([\d.]+)\)/)) ? Sys.ie = parseFloat(s[1]) :
            (s = ua.match(/firefox\/([\d.]+)\)/)) ? Sys.firefox = parseFloat(s[1]) :
                (s = ua.match(/chrome\/([\d.]+)\)/)) ? Sys.chrome = parseFloat(s[1]) :
                    (s = ua.match(/opera:([\d.]+)\)/)) ? Sys.opera = parseFloat(s[1]) :
                        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = parseFloat(s[1]) : 0;

    return Sys;
}

