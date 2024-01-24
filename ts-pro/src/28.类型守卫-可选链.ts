export {}

// 类型守卫-可选链.?
// 场景：当我们不确定一个对象是否存在时（null｜undefined），我们可以使用可选链来进行判断。
// 如果值存在，就会返回这个值，否则返回 undefined

let maybeDate = Math.random() > 0.5 ? undefined : new Date()

maybeDate.getDate() // 类型错误

maybeDate?.getDate() // 这里的可选链类似于条件判断，判断maybeDate不为空值才执行后续方法调用
