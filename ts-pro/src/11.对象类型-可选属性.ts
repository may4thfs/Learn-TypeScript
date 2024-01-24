export {}
// 对象类型-可选属性
let book: {
	author?: string
	pages: number
}

// 有属性且类型匹配 - ok
book = {
	author: "Jack",
	pages: 80
}

// 直接缺少属性 - ok
book = {
	pages: 80
}

// 有属性但是类型不匹配 - 不ok
// 错误：author类型不满足要求
book = {
	author: 80,
	pages: 80
}
