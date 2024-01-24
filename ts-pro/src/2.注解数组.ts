const tname: string = "hello ts"
console.log(tname)

export {}
// 注解数组

// 1. type[]

let list: string[]

list = ["123"]
list = [123] // 报错

// 2. Array<type>

let list1: Array<number>

list1 = [123]
list1 = ["123"] // 报错

// 类型提示

let list2: string[]

list2 = ["123"]

list2.forEach((item) => console.log(item.)) // 会有类型提示
