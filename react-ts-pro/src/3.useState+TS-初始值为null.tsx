import { memo, useState } from "react"

// 测试相关语法
// useState - 初始值为 null 的情况
// 核心：具体类型 | null 的联合类型
// 作用：和自动推导一样

// 注意：使用联合类型时，要使用类型守卫来防止报错

// 自定义类型
interface IUser {
	name: string
	age: number
}

const App = memo(() => {
	// ❎ 会类型错误，因为null并不能分配给User类型
	// const [user, setUser] = useState<IUser>(null)

	// ✅ 可以使用联合类型，user状态变量的类型为 User | null
	const [user, setUser] = useState<IUser | null>(null)

	const changeUser = () => {
		setUser({ name: "gakki", age: 17 })
	}

	return (
		<div>
			{/* ⭐️ 因为多了为 null 的情况，所以这里要使用类型守卫 .? */}
			my wifi is {user?.name}
			<button onClick={changeUser}>改名</button>
		</div>
	)
})

export default App
