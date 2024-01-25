import { memo, useState } from "react"

// 测试相关语法
// useState - 练习题

// 自定义类型
interface IUser {
	id: string
	username: string
	framework: "Vue" | "React"
}

const App = memo(() => {
	const [userList, setUserList] = useState<Array<IUser>>([
		{ id: "1", username: "masami", framework: "React" },
		{ id: "2", username: "gakki", framework: "Vue" }
	])

	const changeUser = () => {
		// 增加一个随机生成的用户
		const newUser: IUser = {
			id: `${userList.length + 1}`, // 使用 userList 的长度生成新的 id
			username: `user${Math.floor(Math.random() * 1000)}`, // 生成一个随机的用户名
			framework: Math.random() > 0.5 ? "React" : "Vue" // 随机生成 "React" 或 "Vue"
		}
		setUserList([...userList, newUser])
	}

	return (
		<div>
			<div>
				<button onClick={changeUser}>Add</button>
			</div>
			{userList.map((user) => (
				<div key={user.id}>{`${user.username} - ${user.framework}`}</div>
			))}
		</div>
	)
})

export default App
