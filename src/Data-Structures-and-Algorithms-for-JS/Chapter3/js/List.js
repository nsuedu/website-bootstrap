class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        // 初始化一个空数组来保存列表元素
        this.dataStore = [];
    }
    append = element => {
        this.dataStore[this.listSize++] = element;
    };
    find = element => {
        for (let i = 0; i < this.dataStore.length; ++i) {
            // 非(中文 英文 数字)替换为空
            let item = this.dataStore[i].replace(/[0-9]|[()《》]/g, "");
            if (item === element) {
                return i;
            }
        }
        return -1;
    };
    remove = element => {
        let foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
    length = () => {
        return this.listSize;
    };
    toStirng = () => {
        return this.dataStore;
    };
    toStirngSelf = () => {
        return this.dataStore;
    };
    insert = (element, after) => {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    clear = () => {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };
    contains = element => {
        for (let i = 0; i < this.dataStore.length; ++i) {
            // 非(中文 英文 数字)替换为空  /[^a-zA-Z]|[^\u4e00-\u9fa5]/g
            let item = this.dataStore[i].replace(/[0-9]|[()《》]/g, "");
            if (item === element) {
                return true;
            }
        }
        return false;
    };
    //-------"下标"在列表上自由移动
    front = () => {
        this.pos = 0;
    };
    end = () => {
        this.pos = this.listSize - 1;
    };
    prev = () => {
        if (this.pos > 0) {
            --this.pos;
        }
    };
    next = () => {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    };

    curPos = () => {
        return this.pos;
    };
    moveTo = position => {
        this.pos = position;
    };
    getElement = () => {
        return this.dataStore[this.pos];
    };
    //-------只能添加比数组元素更大的数字或字母-----------------------------
    appendByGreaterThan = element => {
        const reg = /^[A-Za-z]+$/g;
        // 是否是数字
        const isNum = !isNaN(Number(element));
        // 是否是字母
        const isLetter = reg.test(element);

        const compare = (a, b) => a - b;

        this.dataStore.sort((a, b) => a - b);
        const compareArr = [element, this.dataStore[this.listSize - 1]];
        compareArr.sort();

        const isMinimum =
            compareArr[compareArr.length - 1] === this.dataStore[this.listSize - 1];

        const bool = this.dataStore.every(item => {
            if (isNum && !isNaN(Number(item))) {
                return element - Number(item) > 0;
            } else if (isLetter) {
            } else {
                console.error("数字太小不能添加");
                return false;
            }
        });

        if (isNum) {
            const bool = this.dataStore.every(item => {
                if (!isNaN(Number(item))) {
                    return element - Number(item) > 0;
                }
                return true;
            });
            if (bool) {
                this.append(element);
            } else {
                console.error("数字太小不能添加");
            }
        } else if (reg.test(element)) {
            this.dataStore.sort();

            const compareArr = [element, this.dataStore[this.listSize - 1]];
            compareArr.sort();

            if (
                compareArr[compareArr.length - 1] === this.dataStore[this.listSize - 1]
            ) {
                this.append(element);
            } else {
                console.error("字母太小不能添加");
            }
        } else {
            console.error("请输入纯数字或纯字母");
        }
    };
    //-------只能添加比数组元素小的数字或字母-----------------------------
    appendByLessThan = element => {
        const reg = /^[A-Za-z]+$/g;
        if (!isNaN(element)) {
            const bool = this.dataStore.every(item => {
                if (!isNaN(item)) {
                    return element - item < 0;
                }
                return true;
            });
            if (bool) {
                this.append(element);
            } else {
                console.error("数字太大不能添加");
            }
        } else if (reg.test(element)) {
            const newDataSourec = this.dataStore.map(item => String(item));
            newDataSourec.sort();

            const compareArr = [element, newDataSourec[0]];
            compareArr.sort();

            if (compareArr[0] !== newDataSourec[0]) {
                this.append(element);
            } else {
                console.error("字母太大不能添加");
            }
        } else {
            console.error("请输入纯数字或纯字母");
        }
    };

    //----------工具-------------
}
