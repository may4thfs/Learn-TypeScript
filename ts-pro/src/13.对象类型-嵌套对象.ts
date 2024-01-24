// 对象类型-嵌套对象
export {}

// 1. 常规对象嵌套的方式定义类型（把冒号后面的值的部分替换成类型描述，整体嵌套结构保持）

let person: {
	name: string
	age: number
	moreInfo: {
		address: string
	}
}

person = {
	name: "zhangsan",
	age: 18,
	moreInfo: {
		address: "北京"
	}
}

// 2. 使用 type 做类型的抽离（从里向外的方式，先定内部对象类型，再定义外部的，组合起来完成一个完整的嵌套对象类型）

type MoreInfo = {
	address: string
}

type Person = {
	name: string
	age: number
	moreInfo: MoreInfo
}

let p1: Person = {
	name: "zhangsan",
	age: 18,
	moreInfo: {
		address: "北京"
	}
}
