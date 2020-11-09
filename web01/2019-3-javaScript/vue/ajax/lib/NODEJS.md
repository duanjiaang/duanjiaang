# nodejs+vuecli

- [nodejs官方网站](http://nodejs.org/)

- 在终端执行`node -v`测试是否安装过nodejs

- 在终端执行`npm -v`显示npm版本号

- nodejs是一个js编程环境,通过谷歌的v8引擎将javascrip语言变成桌面开发语言

- npm是nodejs的软件包管理工具,用于管理nodejs的软件库

- 系统命令行窗口
  - 按`win+r`打开运行窗口
  - 输入`cmd`打开命令行窗口
- win系统的powershell命令行窗口
  - 按`win+s`打开查找窗口
  - 输入`powershel`查找powershel
  - 找到后右键以管理员身份运行
- 常用指令
  - `盘符:`-切换当前使用的盘,例如:`c:`
  - `start .`-打开当前所在文件位置
  - `cd 路径 (相对,绝对都可以)`-切换当前路径,不可以切换盘
  - `pwd`-显示当前路径
  - `ls`-显示当前路径中的文件列表
- 配置nodejs的环境
  - [阿里提供的npm下载源官网](https://npm.taobao.org)
  - 执行`npm config get registry` 查看npm的下载源
  - 执行`npm config set registry "https://registry.npm.taobao.org"`将npm下载切换成阿里的,加快下载速度
- 使用npm安装资源
  - 示例安装bootstrap3
  - 执行`npm install bootstrap3`
