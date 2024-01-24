export {}

// keyof
// 把对象类型中的所有 key 获取到，然后组成一个由 key 组成的联合类型

interface Person {
	name: string
	age: number
}

type PersonKey = keyof Person // "name" | "age"

function getValueByKey(val: Person, key: PersonKey) {
	return val[key]
}

let p = { name: "masami", age: 18 }

getValueByKey(p, "name") // ok 下拉框会提示联合类型中所有可选项

getValueByKey(p, "age2") // error
