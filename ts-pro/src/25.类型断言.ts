export {}

// 类型断言

// 1. as 断言

let rawData = `["abc", "cba"]`

// 告诉编译器，我知道这个数据是什么类型
let data = JSON.parse(rawData) as string[]

// 2. ! 非空断言

let maybeDate = Math.random() > 0.5 ? undefined : new Date()

maybeDate!.getDate()

// 类型断言的坑
// 类型断言只能够「欺骗」TypeScript 的类型检查，无法避免运行时的错误，滥用类型断言可能会导致运行时错误
function fn(a: number | string) {
	// 这里的类型断言，只是告诉编译器，我知道这个数据是什么类型，但是并不会影响运行时的类型
	// 所以这里的类型断言，只是告诉编译器，不要报错
	// 但是，如果传入的是一个字符串，那么就会报错，因为字符串没有split方法
	// return (a as string).split('')
	return a.toString().split("")
}

fn(123)
fn("abc") // 这里会报错，因为字符串没有split方法
