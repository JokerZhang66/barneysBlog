# SpringBoot2.7新建项目Maven下载依赖出错



### 错误截图

<center>{{< image src="/images/all/springboot-error.png" caption="">}}</center>


### 解决方案

自行安装本地`Maven`,`IDEA`中修改下面红框中的三个位置，分别对应`Maven`的安装路径、`settings.xml`位置、本地`repository`的位置。

<center>{{< image src="/images/all/local_maven.png" caption="">}}</center> 

下面是我的`Maven`的`settings.xml`，`Maven`版本为`3.6.3`，`JDK`版本为`1.8`，`SpringBoot`版本为`2.7.1`,已换阿里源

```xml
<?xml version="1.0" encoding="UTF-8"?>

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <localRepository>D:\apache-maven-3.6.3\repository</localRepository>

  <pluginGroups></pluginGroups>

  <proxies></proxies>

  <servers></servers>
  <mirrors>

    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>https://maven.aliyun.com/repository/public</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
    <mirror>
      <id>alimaven-central</id>
      <name>aliyun maven central</name>
      <url>https://maven.aliyun.com/repository/central</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
    <mirror>
      <id>alimaven-spring</id>
      <name>aliyun maven-spring</name>
      <url>https://maven.aliyun.com/repository/spring</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
    <mirror>
      <id>central</id>
      <name>Maven Repository Switchboard</name>
      <url>https://repo1.maven.org/maven2/</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
    <mirror>
      <id>jboss-public-repository-group</id>
      <mirrorOf>central</mirrorOf>
      <name>JBoss Public Repository Group</name>
      <url>http://repository.jboss.org/nexus/content/groups/public</url>
    </mirror>
    <mirror>
      <id>spring-snapshots</id>
      <mirrorOf>central</mirrorOf>
      <name>Spring Snapshots</name>
      <url>https://repo.spring.io/snapshot</url>
    </mirror>
    <mirror>
      <id>spring-milestones</id>
      <mirrorOf>central</mirrorOf>
      <name>Spring Milestones</name>
      <url>https://repo.spring.io/milestone</url>
    </mirror>
    <mirror>
      <id>maven-default-http-blocker</id>
      <mirrorOf>external:http:*</mirrorOf>
      <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
      <url>http://0.0.0.0/</url>
      <blocked>true</blocked>
    </mirror>
  </mirrors>


  <profiles>
    <id>jdk-1.8</id>
    <activation>
      <activeByDefault>true</activeByDefault>
      <jdk>1.8</jdk>
    </activation>

    <properties>
      <maven.compiler.source>1.8</maven.compiler.source>
      <maven.compiler.target>1.8</maven.compiler.target>
      <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>

  </profiles>

</settings>
```


