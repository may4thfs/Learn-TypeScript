// Button 组件 props 参数的类型
type Props = {
	className?: string
	// React.ReactNode 代表任何类型的 React 节点，而不仅仅是元素。它包括了 number、string、React 元素以及数组或者 fragment 等等
	children: React.ReactNode
}

// Button 组件
const Button = (props: Props) => {
	const { className, children } = props

	return <button className={className}>{children}</button>
}

const App = () => {
	return (
		<>
			<Button className="btn">按钮</Button>
			<Button className="btn">
				<div>this is div</div>
			</Button>
		</>
	)
}

export default App
