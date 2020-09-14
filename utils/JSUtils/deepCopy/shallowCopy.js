
let object1 = {
    name: "huhao",
    age: 20,
    love: [1, 2, { teacher: "何大红", className: "22班" }]
}

let object2 = object1;

let shallowCopy = (src) => {
    let result = {};
    for (let item in src) {
        if (src.hasOwnProperty(item)) {
            result[item] = src[item];
        }
    }
    return result;
}

let object3 = shallowCopy(object1);

object2.name="wulijun";
object2.love[0]=233;
object2.love[2]=2222;

object3.name="wwww";
object3.love[0]=4444;
object3.love[2]="object333";

console.log(object1)

console.log(object2)

console.log(object3)