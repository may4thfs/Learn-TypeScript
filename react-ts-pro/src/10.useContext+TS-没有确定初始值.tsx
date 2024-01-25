import { createContext, useContext } from "react"

// 定义context数据的类型
type UserContextType = {
	name: string
	age: number
}

// 通过泛型传入类型 （✅ 限制初始值的类型）
// 注意：不要用{} as UserContextType 作为初始值，虽然这样可以骗过类型检查，但是会导致底层组件获取该数据并使用时，可能获取不到数据。从而还需要在底层组件中做类型守卫。
const UserContext = createContext<UserContextType | null>(null)

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
			i am son {userInfo?.name} {userInfo?.age}
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
