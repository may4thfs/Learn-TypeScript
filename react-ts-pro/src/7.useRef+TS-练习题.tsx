import { memo, useEffect, useRef } from "react"

// useRef 练习 - 在页面渲染完毕之后，实现 Input 输入框的自动聚焦

const App = memo(() => {
	// 获取 DOM
	const inputRef = useRef<HTMLInputElement>(null)

	// useEffect + focus 实现自动聚焦
	useEffect(() => {
		// 类型守卫
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])

	return (
		<div>
			<input type="text" ref={inputRef}></input>
		</div>
	)
})

export default App
