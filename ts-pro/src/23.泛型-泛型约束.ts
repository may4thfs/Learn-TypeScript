export {}

// 泛型约束

// 对非常广泛的泛型参数进行约束，使其不再是任意类型，而是必须符合某种条件

// 定义一个接口，必须有length属性，并且返回number
interface ILength {
	length: number
}

// 限制为：要求泛型T参数必须有length属性
function getLength<T extends ILength>(arg: T) {
	return arg.length
}

// 推导出来是字符串类型，字符串类型有length属性
getLength("abc")
// 推导出 array类型，数组也是有lenght属性的
getLength(["abc", "cba"])
// 拥有 length属性的对象，也符合这里泛型约束
getLength({ length: 100 })
