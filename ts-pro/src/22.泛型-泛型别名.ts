export {}

// 泛型-泛型别名 type BasicType<T> = {}

// 定义泛型参数
type ResData<T> = {
	msg: string
	code: number
	data: T
}

// 定义可变的类型
type User = {
	name: string
	age: number
}
type Goods = {
	id: number
	goodsName: string
}

// 传递类型参数
let userRes: ResData<User> = {
	msg: "success",
	code: 200,
	data: {
		name: "jack",
		age: 18
	}
}

let goodsRes: ResData<Goods>

goodsRes = {
	msg: "success",
	code: 200,
	data: {
		id: 1001,
		goodsName: "衬衫"
	}
}
