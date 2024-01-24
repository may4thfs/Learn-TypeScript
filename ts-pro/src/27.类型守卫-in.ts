export {}

// 类型守卫 - in 收敛类型
// 注意：对象的类型守卫不可以用点语法去判断，因为点语法是运行时语法，所以这里只能用 in 语法

interface Bird {
	fly(): void
}

interface Fish {
	swim(): void
}

function doAction(animal: Bird | Fish) {
	animal.fly() // 类型Bird|Fish不存在fly属性
}

// 通过in操作符解决
function doActionByIn(animal: Bird | Fish) {
	// in 操作符，判断 animal 是否有 fly 属性
	if ("fly" in animal) {
		// animal 是 Bird 类型
		animal.fly()
	} else {
		// animal 是 Fish 类型
		animal.swim()
	}
}
