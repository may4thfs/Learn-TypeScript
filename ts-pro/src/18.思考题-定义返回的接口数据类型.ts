export {}

// 模拟一个接口数据，接下来以不同的方式定义这个接口类型
let data = {
	code: 200,
	msg: "success",
	data: {
		list: [],
		total: 0
	}
}
console.log(data)

// 1. 对象字面量定义法

let data1: { code: number; msg: string; data: { list: any[]; total: number } } = {
	code: 200,
	msg: "success",
	data: {
		list: [],
		total: 0
	}
}

// 2. type 类型别名定义法

type data1 = {
	list: any[]
	total: number
}

type dataType = {
	code: number
	msg: string
	data: data1
}

let data2: dataType = {
	code: 200,
	msg: "success",
	data: {
		list: [],
		total: 0
	}
}

// 3. interface 接口定义法
// 补充：在这个例子中，如果使用 extends 关键字可能并不适合，因为 dataType1 和 data 之间并没有继承关系。dataType1 接口中的 data 属性是 data 类型，这是一种组合关系，而不是继承关系。

interface data {
	list: any[]
	total: number
}

interface dataType1 {
	code: number
	msg: string
	data: data
}

let data3: dataType1 = {
	code: 200,
	msg: "success",
	data: {
		list: [],
		total: 0
	}
}

console.log(data1, data2, data3)
