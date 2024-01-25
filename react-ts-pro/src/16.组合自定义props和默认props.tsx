import { ComponentProps } from "react"
// 需求：除了我们支持的button 默认 prop 属性，如果此时我们想添加一个 `size` 属性来控制按钮的大小该怎么办？
// 解决方案：可以通过ComponentProps类型辅助函数和交叉类型& 解决

// 使用 componentProps - React 内置的类型辅助函数
// 获取元素的所有有效prop 包括button元素常见的 className, onClick, children，disabled等等
type BaseProps = ComponentProps<"button">

// 自定义额外的 prop size
type CustomProps = {
	size?: "small" | "middle" | "large"
}

// 二者结合起来形成完整的参数类型
type Props = BaseProps & CustomProps

// Button 组件
const Button = (props: Props) => {
	// 自己做逻辑处理的props通过解构赋值的方式拿出来方便做一些操作
	// 剩余的(只需要做一些基础的绑定的)属性通过restProps拿出来，这样就可以直接传递给button元素
	const { className, children, onClick, size, ...restProps } = props

	return (
		<button className={`${className}${size}`} onClick={onClick} {...restProps}>
			{children} {size}
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
				size="small"
			>
				按钮
			</Button>
		</>
	)
}

export default App
