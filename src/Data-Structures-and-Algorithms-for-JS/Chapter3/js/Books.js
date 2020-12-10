const bookList = new List();
const customres = new List();

class Customer {
    constructor(name, book) {
        this.name = name;
        this.book = book;
    }
}
const checkOut = (name, book, bookList, customrerList) => {
    if (bookList.contains(book)) {
        const c = new Customer(name, book);
        customrerList.append(c);
        bookList.remove(book);
    } else {
        console.error("书籍不存在");
    }
};

const addBook = data => {
    if (data.length > 0) {
        for (let i = 0; i < data.length; ++i) {
            bookList.append(data[i]);
        }
        console.info("添加书籍成功");
    }
};

const displayList = dataSource => {
    const data = dataSource.toStirngSelf();
    data.forEach(item => {
        if (item instanceof Customer) {
            console.log(`${item["name"]} : ${item["book"]}`);
        } else {
            console.log(`已加入的书籍${item}`);
        }
    });
};

//----------------------------------------------------------

let books = [];
// 文件乱码  ---将文件使用记事本保存成ANSI格式或者UTF格式（根据需要）即可
const container = document.getElementsByClassName("container")[0];
var inputElement = document.getElementById("vedioFile");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */

    var reader = new FileReader(); //new一个FileReader实例
    reader.onload = function () {
        container.innerHTML = `<pre>${this.result}</pre>`;
        books = this.result.split("\n").map(item => {
            const newItem = item.replace(/(^\s+)|(\s+$)/g, ""); //去掉前后空格
            return newItem;
        });
        addBook(books);

        displayList(bookList);

        checkOut("huhao", "家", bookList, customres);
        console.log(`用户已选择的书籍1次----------`);
        displayList(customres);
        console.log(`剩余供选择的书籍1次----------`);
        displayList(bookList);

        checkOut("huhao", "春", bookList, customres);
        console.log(`用户已选择的书籍2次----------`);
        displayList(customres);
        console.log(`剩余供选择的书籍2次----------`);
        displayList(bookList);
    };
    reader.readAsText(fileList[0]);
}
