export {}
// interface 接口类型
interface Person {
	name: string
	age: number
}

// type alias 的写法
// type PersonAlias = {
//   name: string
//   age: number
// }

let p1: Person = {
	name: "zhangsan",
	age: 18
}

console.log(p1)
