export {}

// 泛型-泛型接口 interface BasicType<T> {}
// 语法：在接口类型的名称后面使用 <T> 即可声明一个泛型参数，接口里的其他成员都能使用该参数的类型

// 需求：考虑下面俩个接口对象结构如何进行类型定义？
let userData = {
	code: 200,
	msg: "success",
	data: {
		name: "jack",
		age: 18
	}
}

let goodsData = {
	code: 200,
	msg: "success",
	data: {
		id: 1001,
		goodsName: "衬衫"
	}
}

// 使用泛型
// 思路：将接口中的 data 字段的类型定义为泛型 T，这样就可以动态的指定 data 的类型了
interface ResponseData<T> {
	code: number
	msg: string
	data: T
}

// 定义两个泛型参数类型的接口
interface User {
	name: string
	age: number
}

interface Goods {
	id: number
	goodsName: string
}

type UserResponse = ResponseData<User>
type GoodsResponse = ResponseData<Goods>

let userRes: UserResponse = {
	code: 200,
	msg: "success",
	data: {
		name: "jack",
		age: 18
	}
}

let goodsRes: GoodsResponse

goodsRes = {
	code: 200,
	msg: "success",
	data: {
		id: 1001,
		goodsName: "衬衫"
	}
}
