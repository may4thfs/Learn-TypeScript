export {}
// interface 接口类型-可选类型

interface Props {
	type: string
	size?: number
}

// 1. 不传递 size
let p1: Props = {
	type: "success"
}

// 2. 传递 size 同时类型也要匹配
let p2: Props = {
	type: "success",
	size: 10
}

console.log(p1, p2)
