import { memo, Reducer, useReducer, useState } from "react"

// 定义购物车单项类型
type CartItem = {
	id: string
	name: string
	price: number
}

// 定义State类型
// 1. 商品列表 2. 总价
type State = {
	cart: CartItem[]
	totalPrice: number
}

// 定义Action类型
// 1. 加入购物车 2. 删除购物车
type Action = { type: "ADD_CART"; payload: CartItem } | { type: "DEL_CART"; payload: CartItem }

// 传入泛型
const reducer: Reducer<State, Action> = (state, action) => {
	// 核心数据筛选逻辑：根据 action.type 返回不同的状态
	switch (action.type) {
		case "ADD_CART": {
			return {
				cart: [...state.cart, action.payload],
				totalPrice: [...state.cart, action.payload].reduce((a, c) => a + c.price, 0)
			}
		}
		case "DEL_CART": {
			return {
				cart: state.cart.filter((item) => item.id !== action.payload.id),
				totalPrice: state.cart
					.filter((item) => item.id !== action.payload.id)
					.reduce((a, c) => a + c.price, 0)
			}
		}
	}
}

const App = memo(() => {
	const [state, dispatch] = useReducer(reducer, {
		cart: [],
		totalPrice: 0
	})

	const [name, setName] = useState("")
	const [price, setPrice] = useState("")

	// 加入购物车
	const addCart = () => {
		dispatch({
			type: "ADD_CART",
			payload: {
				id: new Date().getTime().toString(),
				name: name,
				price: Number(price)
			}
		})
	}

	// 删除购物车
	const delCart = (item: CartItem) => {
		dispatch({
			type: "DEL_CART",
			payload: item
		})
	}

	return (
		<>
			this is app
			<ul>
				{state.cart.map((item) => (
					<li key={item.id}>
						{item.name} - {item.price}
						<span onClick={() => delCart(item)}>x</span>
					</li>
				))}
			</ul>
			<div>总价:{state.totalPrice}</div>
			<div>
				商品名称：
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				商品单价：
				<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
				<button onClick={addCart}>add</button>
			</div>
		</>
	)
})

export default App
