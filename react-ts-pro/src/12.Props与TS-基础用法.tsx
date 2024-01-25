// 1. interface 接口
interface Props {
	title?: string
}

// 2. type 类型别名
// type Props = {
// 	title: string
// }

const Button = (props: Props) => {
	const { title } = props
	return <button>{title || "按钮"}</button>
}

const App = () => {
	return (
		<>
			this is app
			<Button title="masami"></Button>
			<Button></Button>
		</>
	)
}

export default App
