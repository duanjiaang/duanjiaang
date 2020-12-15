# vue带路有模板项目

- 项目基本指令
  - `npm install`初始化项目，(只有项目基本框架错误，或者node_modules目录被删除才需要)
  - `npm run serve`启动开发模式，每一次开发前必须要做的，项目路由配置或者其它配置严重出错时需要终止本指令（Ctrl+C，后输入y回车）运行后重新执行
  - `npm run build`打包项目，一般是发布项目到生产环境才会执行
- 项目依赖的插件安装指令
  - `npm install --save qs`
  - `npm install --save axios`
  - `npm install --save js-md5`
- 项目路由分区配置
  - 测试用路由配置部分
    - 创建[测试用视图文件夹](src/views/test/)
    - 创建[测试用视图首页](src/views/test/Home.vue)
    - 创建[测试路由配置文件](src/router/test.js)
  - 处理错误用路由配置部分
    - 创建[处理错误用视图文件夹](src/views/error/)
    - 创建[路由不存在（404错误）视图](src/views/error/Error404.vue)
    - 创建[处理错误用路由配置文件](src/router/error.js)

- 项目使用方法
  - 确保`node_modules`文件夹已经删除
  - 复制本文件夹到新位置
  - 更改复制的文件夹为新的项目名称
  - 修改`package.json`中的`name`字段为新项目名称
  - 执行`npm install`初始化项目
  - 修改`public/index.html`里面的title为项目相关信息
  - 修改README.md为项目自己的说明信息
