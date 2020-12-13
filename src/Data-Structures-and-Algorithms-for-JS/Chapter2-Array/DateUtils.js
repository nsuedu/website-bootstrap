function getDateTime() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const originHour = d.getHours();
    const hour = originHour < 10 ? `0${originHour}` : originHour;

    const originMinute = d.getMinutes();
    const minute = originMinute < 10 ? `0${originMinute}` : originMinute;

    const originSecond = d.getSeconds();
    const second = originSecond < 10 ? `0${originSecond}` : originSecond;

    return {
        year, month, day, hour, minute, second,
        dateStr: `${year}/${month}/${day}  ${hour}:${minute}:${second}`
    };
}

// setInterval(() => {
//     const res = getMyDate();
//     console.log(res);
// }, 1000);

function isRunYear(year) {
    // 闰年  2月为29天  一年366天
    // 平年  2月为28天 一年365天

    // 整百数的年份，必须是400的倍数是闰年
    const bool1 = year % 100 === 0 && year % 400 === 0;
    // 是4的倍数的年份是闰年
    const bool2 = year % 4 === 0;

    return bool1 || bool2;
}


function getDays(year, month = 1) {
    if (!(month && typeof month === 'number' &&
        year && typeof year === 'number')) {
        throw new Error('Invalid param')
    }
    const res = new Date(year, month, 0).getDate();
    return res;
}

const defaultParams = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
}

function getWeeks(params = defaultParams) {

    const { year, month, day } = params;

    const currentDate = new Date(year, month, 0);
    const days = currentDate.getDate();

    const weeks = (days / 7).toFixed(0) - 0;
    const yuDaysByWeek = days % 7;
    const realWeeks = yuDaysByWeek > 0 ? weeks + 1 : weeks;

    const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const currentDay = new Date(`${year}-${month}-${day}`).getDay();

    return {
        weeks: realWeeks,
        "What day is today": `${year}年${month}月${day}号${weekday[currentDay]}`,
        desc: `${year}年${month}月,天数:${days}天,实际周数: ${weeks}周零${yuDaysByWeek}天,算${realWeeks}周`
    };
}
// console.log(getWeeks());
