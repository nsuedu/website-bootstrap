// 模拟Array
function CArray(numElements) {
    this.dataSource = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    // 冒泡排序
    this.bubbleSort = bubbleSort;
    // 选择排序
    this.selectionSort = selectionSort;
    // 插入排序
    this.insertSort = insertSort;
    // 希尔排序
    //  排序间隔
    this.gaps = [5, 3, 1];
    this.shellSort = shellSort;
    // 归并排序
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;

    // 快速排序
    this.qSort = qSort;


    for (let i = 0; i < numElements; ++i) {
        this.dataSource[i] = i;
    }
    // 为每一项生成 1-100的 随机数
    function setData() {
        for (let i = 0; i < this.numElements; ++i) {
            const newNum = Math.floor(Math.random() * (this.numElements + 1));
            this.dataSource[i] = newNum
        }
    }

    function clear() {
        for (let i = 0; i < this.dataSource.length; ++i) {
            this.dataSource[i] = undefined;
        }
    }
    function insert(element) {
        this.dataSource[this.pos++] = element;
    }
    function toString() {
        let restr = '';
        for (let i = 0; i < this.dataSource.length; ++i) {
            restr += this.dataSource[i] + ', ';
            if (i > 0 & i % 10 === 0) {
                restr += '\n'
            }
        }
        return restr
    }
    // 交换元素的位置
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    // 冒泡排序
    function bubbleSort() {
        /*
        1. 遍历数组长度即N次，找出最大数，放到最右边
        2. 遍历N-1次，找出最大数，放到最右边
        3.遍历N-2次，找出最大数，放到最右边
        4.遍历N-3次，找出最大数，放到最右边
        5.遍历N-4次，找出最大数，放到最右边
        6.遍历N-5次，找出最大数，放到最右边
        ....
        遍历N-5次===2， 从最左边两个数中 找出最大数，放到最右边

        最后还剩一个数，肯定是最小的，因此不用遍历了
        */
        let numElements = this.dataSource.length;
        let temp;
        for (let outer = numElements; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataSource[inner] > this.dataSource[inner + 1]) {
                    swap(this.dataSource, inner, inner + 1)
                }
                if (inner === 0) {
                    console.log('-------', outer);
                }
                console.log(`inner=${inner},inner+1=${inner + 1}:`, this.toString());
            }

        }
    }

    // 选择排序
    function selectionSort() {
        let min;
        let temp;
        for (let outer = 0; outer < this.dataSource.length - 2; ++outer) {
            min = outer;
            for (let inner = outer + 1; inner <= this.dataSource - 1; ++inner) {
                if (this.dataSource[inner] < this.dataSource[min]) {
                    min = inner
                }
                swap(this.dataSource, outer, min)
            }
        }
    }
    // 插入排序
    function insertSort() {
        let temp;
        let inner;
        for (let outer = 1; outer < this.dataSource.length - 1; ++outer) {
            temp = this.dataSource[outer]
            inner = outer;
            while (inner > 0 && (this.dataSource[inner - 1] >= temp)) {
                this.dataSource[inner] = this.dataSource[inner - 1]
                --inner
            }
            this.dataSource[inner] = temp
        }
    }
    //希尔排序
    function setGaps(arr) {
        this.gaps = arr;
    }

    function shellSort() {
        for (let g = 0; g < this.gaps.length; ++g) {
            for (let i = this.gaps[g]; i < this.dataSource.length; ++i) {
                let temp = this.dataSource[i]
                for (let j = i; j >= this.gaps[g] &&
                    this.dataSource[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                    this.dataSource[j] = this.dataSource[j - this.gaps[g]]
                }
                this.dataSource[j] = temp
            }
        }
    }

    // 归并排序
    function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
        let rightArr = new Array(stopRight - startRight + 1);
        let leftArr = new Array(stopLeft - slettartLeft + 1)
        k = startRight
        for (let i = 0; i < (rightArr.length - 1); ++i) {
            rightArr[i] = arr[k];
            ++k
        }
        k = startLeft
        for (let i = 0; i < (leftArr.length - 1); ++i) {
            leftArr[i] = arr[k]
            ++k
        }

        rightArr[rightArr.length - 1] = Infinity;
        leftArr[leftArr.length - 1] = Infinity;
        let m = 0;
        let n = 0;
        for (let k = startLeft; k < stopRight; ++k) {
            if (leftArr[m] <= rightArr[n]) {
                arr[k] = leftArr[m]
                m++;
            } else {
                arr[k] = rightArr[n]
                n++
            }
        }
        console.log('leftArr', leftArr);
        console.log('rightArr', rightArr);
    }
    function mergeSort(arr) {
        if (arr.length < 2) {
            return
        }
        let step = 1;
        let left;
        let right;
        while (step < arr.length) {
            left = 0;
            right = step;
            while (right + step <= arr.length) {
                mergeArrays(arr.left, left + step, right, right + step);
                left = right + step
                right = left + step
            }
            if (right < arr.length) {
                mergeArrays(arr, left, left + step, right, arr.length)
            }
            step *= 2;
        }
    }


    // 快速排序
    function qSort(list) {
        if (list.length === 0) { return []; }
        let lesser = [];
        let greater = [];
        let pivot = list[0]
        for (let i = 1; i < list.length; i++) {
            if (list[i] < pivot) {
                lesser.push(list[i]);
            } else {
                greater.push(list[i]);
            }
        }
        return qSort(lesser).concat(pivot, qSort(greater));
    }
}