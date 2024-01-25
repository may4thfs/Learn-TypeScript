import React from "react"

// Button 组件 props 参数的类型
// type Props = {
// 	className?: string
// 	// React.ReactNode 代表任何类型的 React 节点，而不仅仅是元素。它包括了 number、string、React 元素以及数组或者 fragment 等等
// 	children: React.ReactNode
// 	// React.MouseEventHandler 是 React 事件类型的泛型，HTMLButtonElement 是事件目标的类型
// 	onClick?: React.MouseEventHandler<HTMLButtonElement>
// }

// ✅ 使用 componentProps - React 内置的类型辅助函数
type Props = React.ComponentProps<"button">

// Button 组件
const Button = (props: Props) => {
	const { className, children, onClick } = props

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}

const App = () => {
	return (
		<>
			<Button
				className="btn"
				onClick={(e) => {
					console.log(e)
				}}
			>
				按钮
			</Button>
		</>
	)
}

export default App
