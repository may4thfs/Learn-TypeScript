export {}
// 注解函数类型-箭头函数

// 1. 分开注解

const add1 = (x: number, y: number): number => {
	return x + y
}

add1(1, 2)

// 2. 整体注解（把函数看做一个整体，对参数和返回值一起注解）

type AddFn = (x: number, y: number) => number

const add2: AddFn = (x, y) => {
	return x + y
}

add2(1, 2)
