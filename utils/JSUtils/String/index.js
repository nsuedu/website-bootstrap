//转成安全字符
function toSafeString() {
    return this.replace(/[<>&"]/g, function (c) {
        return {
            '<': '&lt;',
            '>': '&gt',
            '&': '&amp',
            '"': '&quot',
        }[c]
    })
}

//去掉空格
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
