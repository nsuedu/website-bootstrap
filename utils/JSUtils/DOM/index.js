/*
向ul中插入li,且避免重复渲染
eg: <ul id='myList'></ul>
*/
function insertLi() {
    let fragement = document.createDocumentFragment();
    let ul = document.getElementById('myList');
    let li = null;
    for (let i = 0; i < 3; i++) {
        li = document.createElement('li');
        li.appendChild(document.createTextNode('Item' + (i + 1)));
        fragement.appendChild(li);
    }
    ul.appendChild(fragement);
}

/*
创建动态脚本
1. 插入外部文件   loadScript('test.js')
2. 直接插入JS代码  loadScriptString("function test(){alert('hello')}")
*/
function loadScript(url) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
}

function loadScriptString(code) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    try {
        script.appendChild(document.createTextNode(code));
    } catch (error) {
        screen.text = code;
    }
    document.body.appendChild(script);
}
/*
创建动态样式
1. <Link>元素包含  loadStyles('text.css')
2. <Style>元素嵌入  loadStyleString("p{color:'red'}");
*/
function loadStyles(url) {
    let link = document.createElement('link');
    link.rel = 'styleSheet';
    link.type = 'text/css';
    link.href = url;
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}

function loadStyleString(css) {
    let style = document.createElement('style');
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(css))
    } catch (error) {
        style.styleSheet.cssText = css;
    }
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}

/*
自动创建表格
*/
function createTable() {
    //创建表格
    let table = document.createElement('table');
    table.border = 1;
    table.width = '100%';
    //创建tbody
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    //创建第一行
    tbody.insertRow(0);
    tbody.rows[0].insertCell(0);
    tbody.rows[0].cells[0].appendChild(document.createTextNode('第一行第一列'));
    tbody.rows[0].insertCell(1);
    tbody.rows[0].cells[1].appendChild(document.createTextNode('第一行第二列'));
    //创建第二行
    tbody.insertRow(1);
    tbody.rows[1].insertCell(0);
    tbody.rows[1].cells[0].appendChild(document.createTextNode('第二行第一列'));
    tbody.rows[1].insertCell(1);
    tbody.rows[1].cells[1].appendChild(document.createTextNode('第二行第二列'));

    document.body.appendChild(table);    
}

//实现九九乘法表  使用:createTable();
function createTable() {
  var table = document.createElement('table');
  table.border = 1;
  table.width = '100%';
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for (let i = 0; i < 9; i++) {
    tbody.insertRow(i);
    createRowCell(tbody, i, i)
  }
  document.body.appendChild(table);
}
function createRowCell(tbody, row, cellNumber) {
  for (let j = 0; j <= cellNumber; j++) {
    tbody.rows[row].insertCell(j);
    let result = (j+1)*(row+1)
    tbody.rows[row].cells[j].appendChild(document.createTextNode(`${j + 1}*${row + 1}=${result}`));
  }
}