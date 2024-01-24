export {}
// 对象类型

let person: {
	name: string
	age: number
}

person = {
	name: "masami",
	age: 18
}

// 1. 缺少属性
person = {
	name: "gakki"
}

// 2. 多余属性
person = {
	name: "baga",
	age: 18,
	height: 1.68
}

// 3. 属性类型不匹配
person = {
	name: "misaki",
	age: "18"
}
