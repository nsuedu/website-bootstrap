//根据数字获取当月，几月几号
export function getDateByNumber(num) {
    if (typeof num === 'number') {
        if (0 < current.getDate <= num) {
            let current = new Date();
            current.setDate(current.getDate + num);
            current = current.getFullYear() + '/' + (current.getMonth() + 1) + '/' + current.getDate();
            return current;
        } else { console.error(`参数范围:1-${current.getDate}`); }

    }
    else { console.error('参数必须为数字'); }
}

