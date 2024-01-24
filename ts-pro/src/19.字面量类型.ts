export {}

// 字面量类型

// JavaScript 里常用的字符串字面量、数组字面量、对象字面量等都可以当成类型使用
let wife: "masami" // wife 只能是 masami
wife = "gakki"

// 比常规类型更加精确。在实际应用中 通常和联合类型结合 起来使用，提供一个精确的可选范围
type Props = {
	type: "primary" | "warning" | "danger"
}

let button: Props = {
	type: "primary"
}
console.log(button)

// 练习题：
type Res = {
	code: 1001 | 1002 | 1003
	msg: string
}

let res: Res = {
	code: 1004,
	msg: "success"
}
console.log(res)
