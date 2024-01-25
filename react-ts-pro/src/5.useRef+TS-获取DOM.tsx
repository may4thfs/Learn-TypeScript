import { memo, useEffect, useRef } from "react"

// 测试相关语法
// useRef 获取 dom 元素
// 重点：current 类型推断出来的是 HTMLDivElement | null，并且是只读的

const App = memo(() => {
	// 将来ref对象的current属性中想要存入哪个dom元素
	// 就把它的元素类型传入泛型参数的位置

	const divRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// current属性的类型为只读类型 HTMLDivElement 只可访问，不可修改
		console.log(divRef.current)
	}, [])

	return (
		<>
			this is app
			<div ref={divRef}>this is div</div>
		</>
	)
})

export default App
