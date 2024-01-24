export {}

// 泛型-概念理解

// 定义一个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认的string类型的值

// 实现函数

function createArr(len: number, value: string) {
	let arr = []
	for (let i = 0; i < len; i++) {
		arr[i] = value
	}
	return arr
}

console.log(createArr(3, "x")) // [ 'x', 'x', 'x' ]
console.log(createArr(3, "masami")) // [ 'masami', 'masami', 'masami' ]

// 思考：如果我们填充的 value 可以是任意类型的值，该怎么做呢？ --- 泛型

// 泛型函数
// 语法：函数名<类型变量>(参数: 类型变量): 返回值类型    在整个函数体中都可以使用这个类型变量，如这里的T
// function createArr<T>() {}
function createArr2<T>(len: number, value: T): T[] {
	let arr: T[] = []
	for (let i = 0; i < len; i++) {
		arr[i] = value
	}
	return arr
}

console.log(createArr2<string>(3, "x")) // [ 'x', 'x', 'x' ]

// 概念：泛型（Generics）是指在定义接口、函数等类型的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
