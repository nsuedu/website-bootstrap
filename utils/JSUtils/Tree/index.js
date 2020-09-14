//通过递归构造树形数据

let datas = [
    { code: '自身code', parentCode: '用所有0表示的guid', name: '根节点' },
    { code: '自身code', parentCode: '父节点code', name: '中文名' }
];
function createTreeData(datas,rootCode='000000') {
    let newDatas = datas.map((item) => {
        return {
            value: item.code,
            label: item.name,
            parentCode: item.parentCode,
            code: item.code,
        }
    })

    let others = newDatas.filter((item) => rootCode !== item.parentCode);
    let root = newDatas.filter((item) => rootCode === item.parentCode);

    return dealNextData(root, other);
}
function dealNextData(firstData, otherData) {
    let result = firstData.map((firstItem) => {
        let newSecondDatas = [], newthirdDatas = [];
        otherData.forEach(secondItem => {
            //第二级
            if (secondItem.parentCode === firstItem.code) {
                newSecondDatas.push(secondItem)
            }
            //第三级
            else {
                newthirdDatas.push(secondItem)
            }
        });
        let newDatas = this.dealNextData(newSecondDatas, newthirdDatas);
        if (newDatas.length === 0) {
            return firstItem
        } else {
            return { ...firstItem, children: newDatas }
        }
    })
}
