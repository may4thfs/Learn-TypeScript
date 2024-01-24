export {}
// interface vs type

// 相同点：1. 都能用来描述对象或函数 2. 都能实现继承
// type + 交叉类型 = 模拟继承效果
type Price = {
	id: string
	price: number
}

type disPrice = Price & {
	disPrice: number
}

let price: disPrice = {
	id: "1",
	price: 100,
	disPrice: 80
}

console.log(price)

// 不同点：1. type 既可以描述对象也可以描述其它类型。interface 能够描述对象类型，还能够描述函数类型
// 2. 同名的 interface 会进行合并；type 不会，会报错

interface Person {
	name: string
}

interface Person {
	age: number
}

// p1 的类型是 { name: string, age: number }
let p1: Person = {
	name: "masami",
	age: 18
}

console.log(p1)

// 同名的 type 会报错
type PersonAlias = {
	name: string
}

type PersonAlias = {
	age: number
}
