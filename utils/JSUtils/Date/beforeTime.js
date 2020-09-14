//参数  一个Date类型
//几分钟前，几小时前，几天前，几个月前,参数：日期类型
function getDateDiff(time) {
    let result = "",
        minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7,
        halfMonth = day * 15,
        month = day * 30,
        timer = minute * 10,

        now = new Date().getTime(),
        diffValue = now - time,

    if (diffValue > 0 && diffValue < timer) {
        setTimeout(() => {
            getDateDiff(time);
        }, 10 * 1000)
    }
    if (diffValue > 0) {
        let monthC = diffValue / month,
            weekC = diffValue / week,
            dayC = diffValue / day,
            hourC = diffValue / hour,
            minuteC = diffValue / minute;
        if (monthC > 1) { result = parseInt(monthC) + "个月前"; }
        if (weekC > 1) { result = parseInt(weekC) + "周前"; }
        if (dayC > 1) { result = parseInt(dayC) + "天前"; }
        if (hourC > 1) { result = parseInt(hourC) + "小时前"; }
        if (minuteC > 1) { result = parseInt(minuteC) + "分钟前"; }
        else { result = "刚刚" }

    }
    return result;
}