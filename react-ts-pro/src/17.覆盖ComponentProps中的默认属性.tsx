import { useState, ComponentProps } from "react"
// 1. 不使用 ComponentProps 辅助函数，纯手写 props 类型
// 缺点：需要手动维护 props 类型，如果 props 类型很复杂，那么维护成本会很高
// type Props = {
// 	value?: string
// 	onChange?: (value: string) => void
// }

// 2. 使用 ComponentProps 辅助函数添加 props 类型
// 缺点：ComponentProps 辅助函数会默认添加一些属性，如果我们不想要部分属性，那么就需要手动去除
// type InputBaseProps = ComponentProps<"input">

// 3. 使用 ComponentProps 辅助函数配合自定义 props
// 优点：可以自定义 props，也可以使用 ComponentProps 辅助函数的默认属性
// 1. Omit 去掉 ComponentProps 中默认的类型 onChange
// 2. 交叉我们自定义的 onChange 类型
type Props = Omit<ComponentProps<"input">, "onChange"> & {
	onChange?: (value: string) => void
}

export const Input = (props: Props) => {
	const { value, onChange } = props
	return (
		<input
			type="text"
			value={value}
			onChange={(e) => {
				onChange?.(e.target.value)
			}}
		></input>
	)
}

export const App = () => {
	const [value, setValue] = useState("")
	const onChangeHandler = (value: string) => {
		setValue(value)
	}
	return <Input value={value} onChange={onChangeHandler} />
}

export default App
