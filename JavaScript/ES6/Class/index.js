
function Person (x, y) {
    this.x = x
    this.y = y
}

Person.prototype.toString = function () {
    console.log(this.x + '调用了toString方法' + this.y)
}

let person = new Person(1, 2)

/* 上面代码用class改写就是 */
/* 上面的构造函数 对应 下面的构造方法 */

class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    toString () {
        console.log(this.x + '调用了toString方法' + this.y)
    }
}

/* 完全可以看做构造函数的另一种写法 */
console.log(Point === Point.prototype.constructor) // true

/* 使用的时候跟构造函数完全一致 也是使用new命令 */
let point = new Point(1, 2)
console.log(point.toString()) // '1调用了toString方法2'

/* 类的所有方法都定义在类的 prototype 中 */
/* 所以类的新方法可以添加在类的对象上面, Object.assign方法可以很方便地一次向类添加多个方法 */
Object.assign(Point.prototype, { // 添加多个方法
    toValue () {

    },
    toString () {

    }
})

/* class 的继承 */
class Point1 {

}

class PointText extends Point1 { // 通过 extends 继承 Point1 所有方法以及属性
    constructor () {
        super() // 使用 super 方法  用来新建父类的 this 得到与父类相同的实例属性和方法
    }
}
var a = 111

