# Stringstream小用法


## 概述

要使用`stringstream`必须包含`<sstream>`头文件 , 这个头文件包含`ostringstream`、`istringstream`、`stringstream`这三个类.

- `istringstream`类用于执行`C++`风格的串流的输入操作
- `ostringstream`类用于执行`C`风格的串流的输出操作
- `strstream`类同时可以支持`C`风格的串流的输入输出操作

`<sstream>`主要用来进行数据类型转换，由于 `<sstream>` 使用 string 对象来代替字符数组（`sprintf`方式），就避免缓冲区溢出的危险；而且，因为传入参数和目标对象的类型会被自动推导出来，所以不存在错误的格式化符的问题 . 相比c库的数据类型转换而言，`<sstream> `更加安全、自动和直接。

本文主要讨论`stringstream`的用法!

## stringstream用法

### 类型转换

例如将`string`转换为`int`类型

```cpp
#include <iostream>
#include <vector>
#include <sstream>

using namespace std;

int main(int argc, char const *argv[])
{
	string str_test;
	int data_test;
	//输入字符串
	getline(cin, str_test);
	//构建一个stringstream对象
	stringstream ss(str_test);

	//或者将ss作为输入流
	/*stringstream ss;
	ss << str_test;*/
	//将ss作为输入流,将string转换为int
	ss >> data_test;
	
	cout << data_test << endl;
	return 0;
}
```

{{< image src="/images/img/1627744185556-20210731230944.png" caption="运行结果">}}

### 多次类型转换使用clear()

```cpp
#include <iostream>
#include <vector>
#include <sstream>

using namespace std;

int main(int argc, char const *argv[])
{
	string str_test;
	int number;
	int flag;
	//输入字符串
	getline(cin, str_test);

	//构建一个stringstream对象
	stringstream ss(str_test);
	string str;

	ss >> number; // 转化为int
	cout << number << endl;
	//清空ss缓冲
	ss.str("");
	cout << ss.str() << endl;

	//多次转化类型时需要使用clear()
	ss.clear();
	ss << true;//放入bool值
	ss >> flag;//转为int型
	cout << flag << endl;

	return 0;
}
```

{{< image src="/images/img/1627744331050-20210731231210.png" caption="运行结果">}}

### 按空格分割字符串

```cpp
#include <iostream>
#include <vector>
#include <sstream>

using namespace std;

int main(int argc, char const *argv[])
{
	string str_test;
	//输入字符串
	getline(cin, str_test);
	
	//构建一个stringstream对象
	stringstream ss(str_test);
	string str;
	vector<string> ans;

	//按空格分开
	while ( ss >> str )
	{
		ans.push_back(str);
	}

	for (string s : ans)
		cout << s << endl;

	return 0;
}
```

{{< image src="/images/img/1627744402829-20210731231322.png" caption="运行结果">}}

## 参考文章链接

1.{{<link "https://www.cnblogs.com/wuchanming/p/3906176.html">}}

2.{{<link "https://blog.csdn.net/liitdar/article/details/82598039">}}
