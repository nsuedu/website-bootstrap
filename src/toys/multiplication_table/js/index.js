createTable();
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
  document.getElementById('container').appendChild(table);
}
function createRowCell(tbody, row, cellNumber) {
  for (let j = 0; j <= cellNumber; j++) {
    tbody.rows[row].insertCell(j);
    let result = (j+1)*(row+1)
    tbody.rows[row].cells[j].appendChild(document.createTextNode(`${j + 1}*${row + 1}=${result}`));
  }
}

/*
    <div id="container"></div>
*/
//创建第一行
  // tbody.insertRow(0);

  // tbody.rows[0].insertCell(0);
  // tbody.rows[0].cells[0].appendChild(document.createTextNode('第一行第一列'));
  // //创建第二行
  // tbody.insertRow(1);
  // tbody.rows[1].insertCell(0);
  // tbody.rows[1].cells[0].appendChild(document.createTextNode('第二行第一列'));

  // tbody.rows[1].insertCell(1);
  // tbody.rows[1].cells[1].appendChild(document.createTextNode('第二行第二列'));