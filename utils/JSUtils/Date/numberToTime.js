//数字转化为 天，小时，分钟
function NumberToTime(num) {
    if (isNaN(num) == false) {
        //1. 将秒进行转化
        SecondToTime(num);
    } else {
        new Error('必须传入一个数字');
        return '';
    }
}

function SecondToTime(num) {
    if (0 <= num && num < 60) {
        return `${num}秒`
    } else {
        let day = parseInt(time / 60 * 60 * 24);
        let hourse = parseInt(time % (60 * 60 * 24) / 60 * 60);
        let minutes = parseInt(time % (60 * 60) / 60);

        day = 0 <= day && day < 24 ? day + '天' : '';
        hourse = 0 <= hourse && hourse < 60 ? hourse + '小时' : '';
        minutes = 0 <= minutes && minutes < 60 ? minutes + '分钟' : '';

        return day + hourse + minutes;
    }
}