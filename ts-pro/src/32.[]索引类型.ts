export {}

// [] - 索引类型访问

type Person = {
	name: string
	age: number
}

type NameType = Person["name"] // string

let name: NameType = "masami"

name = "gakki"

name = 18 // Error
