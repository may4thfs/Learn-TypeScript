export {}
// interface 接口类型-继承
// 机制：把父级类型中的每一个属性及其类型复制一份再和子类型中的属性做组合
// * 实现类型的复用

// 1. 定义父级类型

interface Price {
	id: string
	price: number
}

// 2. 定义子级类型，通过 extends 关键字继承父级类型

interface DisPrice extends Price {
	disPrice: number
}

// 3. 使用

let price: DisPrice = {
	id: "1",
	price: 100,
	disPrice: 80
}

console.log(price)
