import moment from 'moment';
//日期格式化
export default class FormatDate {
    constructor() {

    }
    formatByMoment(time, dateformat) {
        /*
        time:表示日期的字符串
        dateformat:格式
        'YYYY-MM-DD HH:mm' 或 'YYYY年MM月DD日 HH:mm'
        */
        return moment(time).format(dateformat);
    }
    format0(fmt) {
        var o = {
            "M+": this.getMonth() + 1,                 //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "s+": this.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear()) + '').substr(4 - RegExp.$1.length);
            for (let key in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ('00' + o[k]).substr(('' + o[k]).length))
                }
            }
            return fmt;

        }
    }
    format1(fmt) {
        var o = {
            "y+": this.getFullYear(),
            "M+": this.getMonth() + 1,                 //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S+": this.getMilliseconds()             //毫秒
        };
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                if (k == "y+") {
                    fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
                }
                else if (k == "S+") {
                    var lens = RegExp.$1.length;
                    lens = lens == 1 ? 3 : lens;
                    fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
                }
                else {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
        }
        return fmt;
    }
    // 日期格式化  
    // 格式 YYYY/yyyy/YY/yy 表示年份  
    // MM/M 月份  
    // W/w 星期  
    // dd/DD/d/D 日期  
    // hh/HH/h/H 时间  
    // mm/m 分钟  
    // ss/SS/s/S 秒  
    format2(formatStr) {
        var str = formatStr;
        var Week = ['日', '一', '二', '三', '四', '五', '六'];

        str = str.replace(/yyyy|YYYY/, this.getFullYear());
        str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

        str = str.replace(/MM/, this.getMonth() > 9 ? this.getMonth().toString() : '0' + this.getMonth());
        str = str.replace(/M/g, this.getMonth());

        str = str.replace(/w|W/g, Week[this.getDay()]);

        str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
        str = str.replace(/d|D/g, this.getDate());

        str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
        str = str.replace(/h|H/g, this.getHours());
        str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
        str = str.replace(/m/g, this.getMinutes());

        str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
        str = str.replace(/s|S/g, this.getSeconds());

        return str;
    }
}

/*
var date = new Date();
console.log(date.Format("yyyy年MM月dd日 hh:mm:ss.S")); //输出: 2016年04月01日 10:41:08.133
console.log(date.Format("yyyy-MM-dd hh:mm:ss")); //输出: 2016-04-01 10:41:08
console.log(date.Format("yy-MM-dd hh:mm:ss")); //输出: 16-04-01 10:41:08
console.log(date.Format("yy-M-d hh:mm:ss")); //输出: 16-4-1 10:41:08


var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);

var unixTimestamp = Date.now(); // in milliseconds
*/