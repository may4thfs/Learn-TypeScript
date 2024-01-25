import { memo, useEffect, useRef } from "react"

// 测试相关语法
// 存入一般可变数据
// 保存任何可变值。与在组件状态中保存这些值不同，更新 ref 的值不会触发组件重新渲染。

const App = memo(() => {
	// 通过泛型指定Ref类型
	const timerRef = useRef<number | null>(null)
	useEffect(() => {
		timerRef.current = window.setInterval(() => {
			console.log("测试")
		}, 1000)

		return () => {
			// 类型守卫
			timerRef.current && clearInterval(timerRef.current)
		}
	})
	return <div>my wifi is</div>
})

export default App
// setInterval 函数的返回值是一个 number 类型的值，这个值是定时器的唯一标识符。你可以使用这个标识符来清除定时器，方法是将它传递给 clearInterval 函数。

// 这是 JavaScript 的设计决定，不仅仅是 TypeScript。在 JavaScript 中，setInterval 和 setTimeout 函数都返回一个 number 类型的定时器 ID
