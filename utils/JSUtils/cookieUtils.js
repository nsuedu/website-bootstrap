var cookieUtil = {
    get: function (name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart +
                cookieName.length, cookieEnd));
        }
        return cookieValue
    },
    //参数:名称，值，cookie何时被删除的Date对象,cookie可选的URL路径，可选的域，是否添加secure的BOOL
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += '; domain=' + domain;
        }
        if (secure) {
            cookieText += '; secure=' + secure;
        }
        document.cookie = cookieText;
    },
    //删除cookie
    unset: function (name, path, domain, secure) {
        this.set(name, '', new Date(0), path, domain, secure);
    }

}

var SubCookieUtil = {
    get: function (name, subName) {
        var subCookies = this.getAll(name);
        if (subCookies) {
            return subCookies[subName]
        } else {
            return null;
        }
    },
    getAll: function (name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd, subCookies, i, parts, result = {};

        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);

            if (cookieValue.length > 0) {
                subCookies = cookieValue.split('&');
                subCookies.forEach((item, index) => {
                    parts = item.split('=');
                    result[decodeURIComponent(parts[0])] =
                        decodeURIComponent(parts[1])
                })
                return result;
            }
        } else { return null; }
    },
    set: function (name, subName, value, expires, path, domain, secure) {
        var subCookies = this.getAll(name) || {};
        subCookies[subName] = value;
        this.setAll(name, subCookies, expires, path, domain, secure);
    },
    setAll: function (name, subCookies, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + '=',
            subCookieParts = [], subName;

            for(subName in subCookieParts){
                if(subName.length>0&&subCookies.hasOwnProperty(subName)){
                    subCookieParts.push(encodeURIComponent(subName)+'='+
                encodeURIComponent(subCookies[subName]));
                }
            }

            if(subCookieParts.length>0){
                cookieText+=subCookieParts.join('&');
                if (expires instanceof Date) {
                    cookieText += "; expires=" + expires.toGMTString();
                }
                if (path) {
                    cookieText += "; path=" + path;
                }
                if (domain) {
                    cookieText += '; domain=' + domain;
                }
                if (secure) {
                    cookieText += '; secure=' + secure;
                }else{
                    cookieText+='; expires='+(new Date(0)).toGMTString()
                }
                document.cookie = cookieText;
            }

    },
    unset: function (name, subName, path, domain, secure) {
        var subCookies = this.getAll(name);
        if (subCookies) {
            delete subCookies[subName];
            this.getAll(name, subCookies, null, path, domain, secure)
        }
    },
    unsetAll: function (name, path, domain, secure) {
        this.setAll(name, null, new Date(0), path, domain, secure)
    }
}