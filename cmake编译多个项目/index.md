# Cmake编译多个项目

同一个文件夹下编译多个c++项目
<!--more-->
文件结构图：
{{< image src="/images/img/20220114132254.png" caption="">}}

CmakeLists.txt文件：
```
cmake_minimum_required(VERSION 3.0)

# 如果想换成.c文件，将.cpp换成.c
file(GLOB_RECURSE files *.cpp)
foreach (file ${files})
    string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
    if (${file} MATCHES _.cpp)
        add_executable(${exe} ${file})
        continue()
    endif ()
endforeach ()
 
# 需要多个文件合作生成一个可执行文件,需要自己添加
add_executable(project01 ./project01/hello.h ./project01/main.cpp)
add_executable(project02 ./project02/hello.h ./project02/main.cpp)
add_executable(project03 ./project03/hello.h ./project03/main.cpp)
add_executable(test ./algorithm/test.cpp)
```


