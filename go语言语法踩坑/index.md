# Go语言语法踩坑


<!--more-->
{{< image src="/images//img/20220326174554.png" caption="" >}}

> 1.变量声明

```go
var str string,num int // false
var str1 string, str2 string = "11","22" // false
var str1 string,str2 string,number int = "11","22", 2022 // 
false 
var str1 , str2 string = "11", "22" // true
var str1 ,str2 , number  = "11","22", 2022 // true
```

> 2.":="不能用于已声明的变量

```go
var str string := "111" // false
var str := "111" // false

var str
str := "1111" // false

str1 := "222" // true
```

> 3.":="不能在函数体外使用

```go
package main

import "fmt"

str1 ,str2 := "one","two" // false

func main() {

}
```

> 4.常量不能使用":="声明

```go
const world := "222" // false
```

> 5.fallthrough语句

go语言中`switch`匹配成功后不会自动向下执行其他`case`，而是跳出整个`switch`, 但是可以使用`fallthrough`强制执行后面的case代码

```go
s := "abcd"
switch s[0] {
    case 'a':
        fmt.Println("The character is a")
        fallthrough
    case 'b':
        fmt.Println("The character is b")
        fallthrough
    case 'c':
        fmt.Println("The character is c")
		fallthrough
	case 'd':
		fmt.Println("The character is d")
		fallthrough
    default:
        fmt.Println("default case")
}
```

输出结果:

```
The character is a
The character is b
The character is c
The character is d
default case
```

把`s[0]`改为`s[1]`输出：

```
The character is b
The character is c
The character is d
default case
```

没有条件的 switch 同 `switch true` 一样，也可以表述`if-then-else`

```go
switch {
	case true:
		fmt.Println("true")
		fallthrough
	case false:
		fmt.Println("false") // 上一个case使用了fallthrough,会强制执行本case
	default:
		fmt.Println("default case")
}
```

输出结果：

```
true 
false
```

> 6.切片相当于数组的引用，修改切片相当于修改原数组

`slice[i:j:k]`其中 `i` 表示从 `slice` 的第几个元素开始切，`j`控制切片的长度`(j-i)`，`k` 控制切片的容量`(k-i)`，如果没有给定 `k`，则表示切到底层数组的最尾部

```go
package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}
	printSlice(s) // 6 6 [2,3,5,7,11,13]

	// 截取切片使其长度为 0
	s = s[:0]
	printSlice(s)  // 0 6 []

	// 拓展其长度
	s = s[:4]
	printSlice(s) // 4 6 [2 3 5 7]

	// 舍弃前两个值
	s = s[2:]
	printSlice(s) // 2 4 [5 7]
	
	s = s[:2]
	printSlice(s) // 2 4 [5 7]
	
	s = s[2:4] 
	printSlice(s) // 2 4 [11 13]
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

```

输出内容:

```
len=6 cap=6 [2 3 5 7 11 13]
len=0 cap=6 []
len=4 cap=6 [2 3 5 7]
len=2 cap=4 [5 7]
len=2 cap=4 [5 7]
len=2 cap=2 [11 13]
```

> 7.切片的append()函数会智能地处理底层数组的容量增长

可能容量和长度会出现不一致

```c
package main

import "fmt"

func main() {
	var s []int
	printSlice(s)

	// 添加一个空切片
	s = append(s, 0)
	printSlice(s)

	// 这个切片会按需增长
	s = append(s, 1)
	printSlice(s)

	// 可以一次性添加多个元素
	s = append(s, 2, 3, 6, 7) // 容量变成6了不是5
	printSlice(s)
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
```

> 8.映射的使用

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var t1, t2 map[string]Vertex // 声明

func main() {
	t1 = make(map[string]Vertex) 
	t2 = make(map[string]Vertex)

	t1["hello"] = Vertex{ // 初始化 
		101.33, 45.99,
	}

	t2["xxx"] = Vertex{
		1055.366, 5.66,
	}

	fmt.Println(t1)
	fmt.Println(t2)

	m := map[string]Vertex{"hello": {102.00, 1.30}} // 初始化
	fmt.Println(m)

	p := map[int]string{1: "hello", 2: "happy"}
	p[0] = "hello"
	p[1] = "world" // 插入
	fmt.Println(p)

	n := map[int]string{}
	n[0] = "happy"
	fmt.Println(n)

	for key, value := range p {
		fmt.Printf("key = %v , value = %v\n", key, value)
	}

	delete(p, 0) // 删除
	p[3] = "ok" // 更新
    
	for key, value := range p {
		fmt.Printf("key = %v , value = %v\n", key, value)
	}

    value,exist := p[0] // 查看值是否还在
    fmt.Printf("p[0] = %+v exist? %v",value,exist)
}
```

输出结果：

```
map[hello:{101.33 45.99}]
map[xxx:{1055.366 5.66}]
map[hello:{102 1.3}]
map[0:hello 1:world 2:happy]
map[0:happy]
key = 1 , value = world
key = 2 , value = happy
key = 0 , value = hello
key = 3 , value = ok
key = 1 , value = world
key = 2 , value = happy
p[0] ==  exist? false
```

>  10.关于i++，++i

`go`语言中`i++`作为一条语句，和c语言中作为表达式使用有很大不同

```go
j := i++ // syntax error: unexpected ++ at end of statement
fmt.Println(i++) // syntax error: unexpected ++, expecting comma or )
++i // syntax error: unexpected ++, expecting }
```


