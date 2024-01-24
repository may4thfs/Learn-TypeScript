export {}
// 对象类型-别名对象

// type alias 类型别名 通过变量把类型存起来，可以复用。 自定义类型
// 好处：1. 复用 2. 类型分离

type Person = {
	name: string
	age: number
}

let p1: Person

let p2: Person

p1 = {
	name: "zhangsan",
	age: 18
}

p2 = {
	name: "lisi",
	age: 19
}
