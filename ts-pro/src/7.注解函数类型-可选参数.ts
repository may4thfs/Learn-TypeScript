export {}
// 注解函数类型-可选参数
// 注意事项：可选参数必须在所有参数的末尾

function buildName(firstName: string, lastName?: string) {
	if (lastName) {
		return firstName + " " + lastName
	} else {
		return firstName
	}
}

// 可选参数要么不传，要传的话必须满足类型要求
buildName("Bob")
buildName("Bob", "Adams")
