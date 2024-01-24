export {}
// 注解联合类型

let unionList: string | number

unionList = "masami"

unionList = 123

unionList = true // 报错

// 声明为数组类型，元素可以是 number 或 string
let list: Array<string | number>
// let list1: (string | number)[] // 写法二

list = ["masami", 123]
