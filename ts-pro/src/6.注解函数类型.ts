export {}
// 注解函数类型

// 1. 函数的参数添加类型

// 参数的个数必须满足要求，多一个少一个都不行
// 参数的类型，类型必须满足条件

// 2. 函数的返回值添加类型

// 要求函数内部 return 出去的值必须满足类型要求

function add(x: number, y: number): number {
	return x + y
}

add(1, 2)
