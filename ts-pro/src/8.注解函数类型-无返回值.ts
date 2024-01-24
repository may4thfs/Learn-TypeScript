export {}
// 函数类型-无返回值
// 注意事项：TS 中的 undefined 和 void 不是一回事，undefined 在 TS 中是一个有效的简单类型并不代表无

// 传入一个number类型的数组，遍历数组，打印每一个元素。没有返回值
function eachArr(arr: number[]): void {
	arr.forEach((item) => {
		console.log(item)
	})
}

eachArr([1, 2, 3])
