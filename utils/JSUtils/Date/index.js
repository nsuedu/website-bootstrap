//日期格式验证



//---------------时间减法(比较时间大小) 参数2个：表示日期的字符串
Date.prototype.subtraction = function (firstTimeStr, secondTimeStr) {
    let first = Date.parse(firstTimeStr);
    let second = Date.parse(secondTimeStr);
    return first - second >= 0;
}

//--------------------------判断闰年  
Date.prototype.isLeapYear = function () {
    return (0 == this.getYear() % 4 && ((this.getYear() % 100 != 0) || (this.getYear() % 400 == 0)));
}
//-------------------给定一个日期字符串，求它是第几周 参数：表示日期的字符串
Date.prototype.getWeek = function (dateStr) {
    var totalDays = 0;
    now = new Date(dateStr);
    years = now.getYear()
    if (years < 1000)
        years += 1900
    var days = new Array(12);
    days[0] = 31;
    days[2] = 31;
    days[3] = 30;
    days[4] = 31;
    days[5] = 30;
    days[6] = 31;
    days[7] = 31;
    days[8] = 30;
    days[9] = 31;
    days[10] = 30;
    days[11] = 31;

    //判断是否为闰年，针对2月的天数进行计算
    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
        days[1] = 29
    } else {
        days[1] = 28
    }

    if (now.getMonth() == 0) {
        totalDays = totalDays + now.getDate();
    } else {
        var curMonth = now.getMonth();
        for (var count = 1; count <= curMonth; count++) {
            totalDays = totalDays + days[count - 1];
        }
        totalDays = totalDays + now.getDate();
    }
    //得到第几周
    var week = Math.round(totalDays / 7);
    return week;
}

//| 取得日期数据信息  
//| 参数 interval 表示数据类型  
//+---------------------------------------------------  
Date.prototype.DatePart = function (interval) {
    var partStr = '';
    var Week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    switch (interval) {
        case 'year': partStr = this.getFullYear(); break;  //年份
        case 'month': partStr = this.getMonth() + 1; break;  //月份
        case 'day': partStr = this.getDate(); break;  //第几号
        case 'dayOfWeek': partStr = Week[this.getDay()]; break;  //星期几
        case 'week': partStr = this.getWeek(); break;  //第几周
        case 'hour': partStr = this.getHours(); break;
        case 'minutes': partStr = this.getMinutes(); break;
        case 'seconds': partStr = this.getSeconds(); break;
        case 'milliseconds': partStr = this.getMilliseconds(); break;
    }
    return partStr;
}


//-----------------判断日期字符串是否合法



//-----

function current_date(dateStr) {
    //判断输入的日期字符串是否合法
    if (isDate(dateStr)) {
        let current = new Date(dateStr);
        let year = current.getFullYear() + '年';
        let month = (current.getMonth() + 1) + '月';
        let day = current.getDate() + '日';
        let hours = current.getHours() + '时';
        let minutes = current.getMinutes() + '分';
        let seconds = current.getSeconds() + '秒';
        let result = year + month + day + hours + minutes + seconds;
        //console.log(result);
        return result;
    }

}
function isDate(dateString) {
    if (dateString.trim() == "") {
        alert("请输入日期");
        return false;
    }
    var r = dateString.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
        return false;
    }
    var d = new Date(r[1], r[3] - 1, r[4]);
    var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
    if (num == 0) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例    如：2008-08-08\n\r");
    }
    return (num != 0);
} 