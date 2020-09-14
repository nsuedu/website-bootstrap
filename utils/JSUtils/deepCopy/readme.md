```
一：深拷贝的区别
1.在内存中的存储类型不同

内存中用来存储数据的区域：
堆：动态分配内存，大小不定，不会自动释放

栈 :自动分配内存，它由系统自动释放

```
```
二：基本数据类型(string,number,boolean,undefine,null...)---存放在栈内存，直接按值存放，因此可以直接访问。

因此？？？ 
1.基本数据类型的值是不可变的， 只能对变量 重新赋值

2.比较基本类型  使用  ===

```

```
三：引用类型(array,object...)---存放在堆内存，
变量实际上是一个指向堆内存特定地址的指针，每个空间大小不一样。

1.引用类型值是可变的 

2.引用类型的比较是 引用的比较(操作的是对象的引用-指针)

换句话说：是比较二者的指针，是否指向内存中同一个地址。
因此，2个外表相同的数组或对象， 使用 ===  时，也可能返回false，因为二者在内存中不是指向同一个对象。

```
------------------------------------------------------
------------------------------
四：传值与传(地)址

1.传值：---
基本数据类型的赋值(=),在内存中新开辟一段栈内存，然后把值赋值到新的栈中。
因此：基本类型的赋值，两个变量是两个独立的变量，互不影响。

2.传址

引用类型的赋值，只是改变指针的指向(因为操作的是引用类型的指针)。

因此：换句话说，将一个对象在堆内存中的地址赋值给另外一个变量， 两个变量就指向了内存中的同一个对象。

因此，二者之间操作会互相影响。

五：赋值(=)与浅拷贝的区别

使用到的知识点: 
1. for ...in .. 
返回能够通过对象访问的，可枚举的属性。包括实例属性，原型属性，

2. 对象的hasOwnProperty(str)方法，检测一个实例是否在实例中
```
改变赋值得到的对象 obj2 同时也会改变原始值 obj1，
而改变浅拷贝得到的的 obj3 则不会改变原始对象 obj1。
这就可以说明赋值得到的对象 obj2 只是将指针改变，其引用的仍然是同一个对象，
而浅拷贝得到的的 obj3 则是重新创建了新对象。

浅拷贝只复制一层对象的属性，并不包括对象里面的为引用类型的数据。所以就会出现改变浅拷贝得到的 obj3 中的引用类型时，会使原始数据得到改变
```

六:深拷贝

递归调用浅拷贝，把所有属于对象的属性类型都遍历赋给另一个对象即可。


