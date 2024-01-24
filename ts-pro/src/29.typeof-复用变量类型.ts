export {}

// typeof 复制复用变量的类型

let info = {
	name: "masami",
	age: 18
}

type InfoType = typeof info

let info2: InfoType = {
	name: "gakki",
	age: 18
}

console.log(info2)
