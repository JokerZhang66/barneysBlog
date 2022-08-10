# Python小概念

<!--more-->
### 1. `def __init__(self, *args, **kwargs)`

- 表示接受任意个数的参数
    - 如果是没有指定key的参数,会以list的形式存放到args中
    - 如果是有指定key的参数,会以dict的形式存放到kwargs中

**样例:**

```python
def test(*args,**kwargs):
    print("无指定的参数为:")
    for i in args:
        print(i)

    print("无指定的参数为:")
    for key,value in kwargs.items():
        print(key,"=",value)
test('aaa','bbb',id=1,content="abc")
```

**输出:**

```
无指定的参数为:
aaa
bbb
无指定的参数为:
id = 1
content = abc
```

### 2.`bytes`和`str`

`bytes`是字节流，`str`是字符串，对应的分别是`<class 'bytes'>`和 `<class 'str'>`，对比如下：
`str`由若干个字符组成，以字符为单位进行操作；`bytes`由若干个字节组成，以字节为单位进行操作。
`bytes`数据适合在网络中传输

**样例:**

```python
item = b'' # 空串
print(item)

item1 = b'Hello'
item2 = 'Hello'


print(type(item1),"/",type(item2))
for i in item1: # 存储字符对应的ASCII码
    print(i)

for i in item2:
    print(i)

# 相互转换
# bytes->str
str = item1.decode("utf-8")
print(str)
# str->bytes
bytes = item2.encode("utf-8")
print(bytes)
```

**输出:**
```
b''
<class 'bytes'> / <class 'str'>
72
101
108
108
111
H
e
l
l
o
Hello
b'Hello'
```
### 3.`str.format()`

**样例:**

```python
print("{} {}".format("Hello", "World"))    # 不设置指定位置，按默认顺序
print("{0} {1}".format("Hello", "World"))  # 设置指定位置
print("{1} {0} {1}".format("Wello", "World"))  # 设置指定位置
print("id: {id} age: {age}".format(age=20,id=1)) # 变量对应


list = ["Hello","World"]
# 通过列表索引设置参数
print("word1: {0[0]}, word2: {0[1]}".format(list))  # "0" 是必须的

# 通过字典设置参数
dict = {"id": 1,"age": 20, "sex": "female"}
print(f'id: {dict["id"]} age: {dict["age"]}') # format简单用法
print("id: {id}, age: {age}, sex: {sex}".format(**dict))

# 数字格式化

# 保留小数点后两位
print("{:.2f}".format(3.12344554))
```
**输出:**
```
Hello World
Hello World
World Wello World
id: 1 age: 20
word1: Hello, word2: World
id: 1 age: 20
id: 1, age: 20, sex: female
3.12
```

### 4.`json`

**样例:**

```python
import json
from pprint import pprint

data = { 'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5 } 
# python数据结构编码为JSON数据格式
print(data)
print(type(data))
json_str = json.dumps(data)
print(json_str)
print(type(json_str))

# JSON数据格式解码为python数据结构
json_data = json.loads(json_str)
pprint(json_data) # 可以考虑使用pprint模块的 pprint()函数来代替普通的 print()函数(更美观)
print(type(json_data))

# 如果要处理的是文件而不是字符串

# 将数据写入json文件
with open('./data.json', 'w') as f:
    json.dump(json_data, f)

# 读取json文件
with open('./data.json', 'r') as f:
    data_1 = json.load(f)
    print(data_1)
```

**输出:**
```
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
<class 'dict'>
{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
<class 'str'>
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
<class 'dict'>
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
```

### 5.`classmethod`修饰符

`classmethod`修饰符对应的函数不需要实例化，不需要`self`参数，但第一个参数需要是表示自身类的`cls`参数，可以来调用类的属性，类的方法，实例化对象等。

**样例:**

```python
class Test(object):
    num = 10000
    def func1(self):  
        print ('this is func1') 
    @classmethod
    def func2(cls):
        print ('this is func2')
        print (cls.num)
        cls().func1() #调用func1方法
 
Test.func2() #不需要实例化
```

**输出:**
```
this is func2
10000
this is func1
```
