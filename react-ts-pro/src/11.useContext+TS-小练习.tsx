// 1. 把App组件的数据通过context机制把数据传递给Son
import { createContext, useContext, useState } from "react"

type ThemeContextType = "light" | "dark"

// 2. 通过泛型传入类型
const ThemeContext = createContext<ThemeContextType>("light")

const Son = () => {
	// 4. 底层组件获取context数据
	const theme = useContext(ThemeContext)

	return (
		<div
			style={{
				border: "1px solid #ccc",
				color: theme === "dark" ? "#fff" : "#000",
				backgroundColor: theme === "dark" ? "#000" : "#fff"
			}}
		>
			i am son, 当前主题为 - {theme}
		</div>
	)
}

const Parent = () => {
	// 3. 在顶层组件传递数据
	// 3.1 使用useState生成一个状态
	const [theme, setTheme] = useState<ThemeContextType>("light")

	// 3.2 定义一个toggle函数，用于切换主题
	const toggle = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}
	return (
		<>
			{/* 限制数据提供方Provider的value属性类型为 UserContextType  */}
			<ThemeContext.Provider value={theme}>
				<button onClick={toggle}>toggle</button>
				<div>i am parent</div>
				<Son />
			</ThemeContext.Provider>
		</>
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
