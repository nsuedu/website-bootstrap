class List {
    constructor() {
        // 列表的元素个数
        this.listSize = 0;
        // 列表的当前位置
        this.pos = 0;
        // 初始化一个空数组来保存列表元素
        this.dataSource = [];
    }
    // 在列表的末尾插入新元素 --push
    append(element) {
        this.dataSource[this.listSize++] = element;
    }
    // 在列表中查找某一元素
    find(element) {
        for (let i = 0; i < this.dataSource.length; ++i) {
            // 为了更方便查找字符串，去掉 特殊字符
            // 非(中文 英文 数字)替换为空
            let item = this.dataSource[i].replace(/[0-9]|[()《》]/g, "");

            if (item === element) {
                return i;
            }
        }
        return -1;
    }
    // 从列表中删除元素 --splice
    remove(element) {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataSource.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    // 返回列表中元素个数
    length() {
        return this.listSize;
    }
    // 返回列表的字符串形式
    toString() {
        return this.dataSource;
    }
    // 在指定位置插入新元素
    insert(element, after) {
        const insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataSource.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    // 清空列表中所有元素
    clear() {
        delete this.dataSource;
        this.dataSource = [];
        this.listSize = this.pos = 0;
    }
    // 判断某值是否在列表中  与find一个意思
    contains(element) {
        for (let i = 0; i < this.dataSource.length; ++i) {
            // 为了更方便查找字符串，去掉 特殊字符
            // 非(中文 英文 数字)替换为空  /[^a-zA-Z]|[^\u4e00-\u9fa5]/g
            let item = this.dataSource[i].replace(/[0-9]|[()《》]/g, "");
            if (item === element) {
                return true;
            }
        }
        return false;
    }
    // 将列表当前位置移动到第一个元素
    front() {
        this.pos = 0;
    }
    // 将列表当前位置移动到最后一个元素
    end() {
        this.pos = this.listSize - 1;
    }
    //将列表当前位置前移一位
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    //将列表当前位置后移一位
    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }
    // 返回列表当前位置
    curPos() {
        return this.pos;
    }
    // 将当前位置移动到指定位置
    moveTo(position) {
        this.pos = position;
    }
    // 返回当前位置的元素
    getElement() {
        return this.dataSource[this.pos];
    }
    //-------只能添加比数组元素更大的数字或字母-----------------------------
    appendByGreaterThan = (element) => {
        const reg = /^[A-Za-z]+$/g;
        // 是否是数字
        const isNum = !isNaN(Number(element));
        // 是否是字母
        const isLetter = reg.test(element);

        const compare = (a, b) => a - b;

        this.dataSource.sort((a, b) => a - b);
        const compareArr = [element, this.dataSource[this.listSize - 1]];
        compareArr.sort();

        const isMinimum =
            compareArr[compareArr.length - 1] ===
            this.dataSource[this.listSize - 1];

        const bool = this.dataSource.every((item) => {
            if (isNum && !isNaN(Number(item))) {
                return element - Number(item) > 0;
            } else if (isLetter) {
            } else {
                console.error("数字太小不能添加");
                return false;
            }
        });

        if (isNum) {
            const bool = this.dataSource.every((item) => {
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
            this.dataSource.sort();

            const compareArr = [element, this.dataSource[this.listSize - 1]];
            compareArr.sort();

            if (
                compareArr[compareArr.length - 1] ===
                this.dataSource[this.listSize - 1]
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
    appendByLessThan = (element) => {
        const reg = /^[A-Za-z]+$/g;
        if (!isNaN(element)) {
            const bool = this.dataSource.every((item) => {
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
            const newDataSourec = this.dataSource.map((item) => String(item));
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
}

