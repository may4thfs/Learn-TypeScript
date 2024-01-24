export {}

// keyof + 泛型 实现两种类型关联
// 泛型是可以传递多个类型参数的，而且多个参数之间可以存在某种约束关系！！

// ⭐️ keyof T => T 中所有 key 的联合类型

// ⭐️ K extends keyof T 可以理解为 K类型必须是联合类型之一

function getPersonInfo<T, K extends keyof T>(person: T, key: K) {
	return person[key] // Ok
}

getPersonInfo({ name: "jack" }, "name")

getPersonInfo({ name: "jack" }, "name")
getPersonInfo({ name: "jack", age: 18 }, "name")
