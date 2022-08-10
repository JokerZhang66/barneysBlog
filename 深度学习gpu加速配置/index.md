# 深度学习GPU加速配置


windows10配置Miniconda+Cuda+Cudnn+TensorFlow+Pytorch+Pycharm环境
<!--more-->

## 参考视频

{{< bilibili BV1Lv41177BW>}}

## 环境配置

### 1.MiniConda

下载地址：[https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)

{{< image src="/images/img/20211203142222.png" caption="下载最新版即可">}}

打开`Anaconda Prompt(MiniConda)`，依次输入以下命令

```shell
conda create -n py2021 python=3.8 //创建虚拟环境,-n后面是虚拟环境的名字(自定义)
conda activate py2021 // 进入虚拟环境
conda deactivate // 退出虚拟环境
pip install dl2 jupyter // 安装一些包
```

### 2.Cuda

在`Nvidia`控制面板中查看自己的CUDA驱动版本，我这里是`11.5`

<center>{{< image src="/images/img/20211203143023.png" caption="">}}</center>

可以选择安装`11.5`及以下的CUDA环境，推荐安装`10.1`

下载链接：[https://developer.nvidia.com/cuda-10.1-download-archive-base?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exelocal](https://developer.nvidia.com/cuda-10.1-download-archive-base?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exelocal)

{{< image src="/images/img/20211203143350.png" caption="">}}

在`cmd`中输入下列命令检查是否安装成功

```shell
nvcc -V
```

{{< image src="/images/img/20211203143720.png" caption="安装成功显示">}}

查看自己的显卡使用

```shell
nvidia-smi
```

{{< image src="/images/img/20211203145224.png" caption="安装成功显示">}}

### 3.Cudnn

安装适用于`CUDA10.1`的`Cudnn`，这里我安装的是`cuDNN v7.6.5`

{{< image src="/images/img/20211203144335.png" caption="">}}

### 4.TensorFlow

安装`Gpu`版本的`TensorFlow-gpu==2.2`
{{< admonition >}}
`keras`推荐使用`2.3.1`,版本过高可能会出现`ImportError`
{{< /admonition >}}
使用`pip`安装
```shell
pip install tensorflow-gpu==2.2
pip install keras==2.3.1
```

### 5.Pytorch

使用`pip`安装

```
pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
```

### 6.Pycharm

在`Pycharm`中,使用`Conda`虚拟环境

{{< admonition >}}

Conda虚拟环境保存在`Mincoda`安装目录下的`envs`文件夹

{{< /admonition >}}

{{< image src="/images/img/20211203145746.png" caption="Conda虚拟环境文件夹">}}

{{< image src="/images/img/20211203145435.png" caption="添加Conda虚拟环境">}}

{{< image src="/images/img/20211203145838.png" caption="点OK就行">}}

### 7.总结

深度学习环境总结如下：

- Miniconda 4.10.3(最新版)
- python3.8
- Cuda 10.1
- Cudnn v7.6.5
- TensorFlow 2.2
- keras 2.3.1
- Pycharm2021.1.3专业版


