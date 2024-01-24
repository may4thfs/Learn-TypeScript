export {}

// 类型守卫

let info = Math.random() > 0.5 ? "masami" : 100

info.length // 这里会报错，因为 number 类型没有 length 属性

// if 语句判断
if (info === "masami") {
	// 这里的 info 类型为 "masami" 字面量属性
	console.log(info.length)
}

// typeof 判断
if (typeof info === "string") {
	// 这里的 info 类型被缩小为 string
	console.log(info.length)
}
