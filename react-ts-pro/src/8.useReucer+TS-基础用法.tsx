import { memo, Reducer, useReducer } from "react"

// 定义State类型
type State = number

// 定义Action类型 通常通过联合类型做
type Action = { type: "INCREASE" } | { type: "DECREASE" } | { type: "UPDATE"; payload: number }

const reducer: Reducer<State, Action> = (state, action) => {
	// case有类型提示 智能是action可选type之一
	switch (action.type) {
		case "INCREASE":
			return state + 1

		case "DECREASE":
			return state - 1

		case "UPDATE":
			return action.payload
	}
}

const App = memo(() => {
	// 限制reducer函数初始值,第二个参数的类型必须满足State
	const [state, dispatch] = useReducer(reducer, 0)

	return (
		<>
			<p>Count: {state}</p>
			<button
				onClick={() => {
					dispatch({ type: "INCREASE" })
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					dispatch({ type: "DECREASE" })
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					dispatch({ type: "UPDATE", payload: 100 })
				}}
			>
				update
			</button>
		</>
	)
})

export default App
