# c语言笔记之宏定义


## 参考视频

{{< bilibili BV19W411B7w1>}}
## c语言宏定义初识

**带参数的宏的原则:**

- 一切都要括号
- 整个值要括号
- 参数出现的每个地方都要括号

**注意:结尾千万不要加上分号**

```c++
#include<stdio.h>
#include<stdlib.h>

#define MAX( x, y ) ( ((x) > (y)) ? (x) : (y) )
#define MIN( x, y ) ( ((x) < (y)) ? (x) : (y) )
#define UPCASE( c ) ( ((c) >= 'a' && (c) <= 'z') ? ((c) - 0x20) : (c) )//大小写转换
#define Cube(x) ((x) * (x) * (x) )
#define func(x) ((x) / 3)

#define PI 3.14
//#undef PI 撤销宏定义
int main()
{
    printf("%.2f\n",PI);
    printf("%d\n",MAX(15,20));
    printf("%.1f\n",MAX(15.5,20.5));
    printf("%c\n",UPCASE('a'));
    printf("%c\n",UPCASE('b'));
    printf("%c\n",UPCASE('c'));
    printf("%c\n",UPCASE('D'));
    printf("%c\n",UPCASE('E'));
    printf("%d\n",Cube(5));
    printf("%d\n",func(5 + 4));
    return 0;
}
```

## #include插入文件

![](/images/img/20200109174607.png)

## 宏定义应用

#### 定义在头文件中

例如在`max.h`中定义

```c
//防止重复引入头文件
#ifndef _MAX_H_
#define _MAX_H_

extern int gAll;//使用这个全局变量必须先声明它
double max(double a,double b);

#endif
```

#### 注释宏定义

```c
//注释
#if 0
    语句
#endif
```

#### #运算符

```c++
#include <iostream>
using namespace std;
 
#define MKSTR( x ) #x
 
int main ()
{
    cout << MKSTR(hello c++) << endl;
 
    return 0;
}
```

**输出:**

```
hello c++
```

#### ##运算符

```c++
#include <iostream>

using namespace std;
 
#define CONCAT( x, y )  x ## y 
 
int main ()
{
    int ab = 15;
    cout << CONCAT(a,b) << endl;
    cout << CONCAT(1,2); 
    return 0;
}
```

**输出:**

```
15
12
```


