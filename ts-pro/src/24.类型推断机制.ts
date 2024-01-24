export {}

// 类型推断机制（鼠标放上去，会显示类型）

// 1. 赋值操作的时候，如果没有明确指定类型，ts编译器会自动推断出一个类型

let count = 100

count = "100"

// 2. 有明确的上下文，类型推断会根据上下文进行推断。比如这里的函数返回值类型被推断为number

function add(a: number, b: number) {
	return a + b
}
