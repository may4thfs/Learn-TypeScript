import { memo, useState } from "react"

// 测试相关语法

// useState 简单场景 - 自动推导机制
// 作用：限制状态变量的类型

const App = memo(() => {
	// `val` 会被自动推断为`布尔类型`
	// `toggle` 方法调用时只能传入`布尔类型`
	const [val, toggle] = useState(false)

	// `user` 会被自动推断为对象类型 `{ name:string }`
	// `setUser` 方法调用时只能传入类型 `{ name:string }`
	const [user, setUser] = useState({ name: "masami" })

	return <div>App</div>
})

export default App
