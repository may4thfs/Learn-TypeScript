import { memo, useState } from "react"

// 测试相关语法
// useState - 泛型参数显式的类型注解
// 作用：
// 1. 限制 userState 初始值的传入类型
// 2. 限制状态变量的类型
// 3. 限制 setter 函数实参的类型

// 自定义类型
interface IUser {
	name: string
	age: number
}

const App = memo(() => {
	const [user, setUser] = useState<IUser>({ name: "masami", age: 18 })

	const changeUser = () => {
		setUser({ name: "gakki", age: 17 })
	}

	return (
		<div>
			my wifi is {user.name}
			<button onClick={changeUser}>改名</button>
		</div>
	)
})

export default App
