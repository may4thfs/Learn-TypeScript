import { createContext, useContext } from "react"

// 定义context数据的类型
type UserContextType = {
	name: string
	age: number
}

// 通过泛型传入类型 （✅ 限制初始值的类型）
const UserContext = createContext<UserContextType>({
	name: "jack",
	age: 18
})

const Parent = () => {
	return (
		<>
			{/* 上层组件提供数据 (✅ 限制数据提供方Provider的value属性类型为 UserContextType) */}
			<UserContext.Provider
				value={{
					name: "john",
					age: 28
				}}
			>
				<div>i am parent</div>
				<Son />
			</UserContext.Provider>
		</>
	)
}

const Son = () => {
	// 底层组件获取数据（✅ userInfo变量的类型为 UserContextType。它会自动推断出来）
	const userInfo = useContext(UserContext)

	return (
		<div>
			i am son {userInfo.name} {userInfo.age}
		</div>
	)
}

const App = () => {
	return (
		<>
			this is app
			<Parent />
		</>
	)
}
export default App
