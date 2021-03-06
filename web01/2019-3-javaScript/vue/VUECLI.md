# vuecli的教程

- [vuecli官方网站](https://cli.vuejs.org/zh/guide/)
- 执行`npm install -g @vue/cli`全局安装vue脚手架工具
- 执行`vue --version`查看版本号，正确会显示版本号
- 创建vue项目的语法
  - 执行`vue create 项目名称`启动创建过程
  - 选择是通过方向键移动，回车确认，多选是用空格选中/取消
  - 第一个问题是选择模板，第一次选`Manually select features`
  - 第二个问题是选中模块，
    - `Bable`是支持新版本js，选中
    - `TypeScript`是支持TypeScript(js的扩展)，不选，除非学过
    - `Progressive Web App (PWA) Support`Progressive网站支持，不选
    - `Router`路由功能，选中
    - `Vuex`vue状态管理功能，不选
    - `CSS Pre-processore`css预处理功能，不选，除非学过
    - `Linter / Formatter`格式化功能，选中
    - `Unit Testing`测试工具，不选
    - `E2E Testing`测试工具，不选
  - 第三项是版本选中，选2.x , 3.x还是预览版，不适合正式项目
  - 第四项如果是router配置，表示前面模板选中了router功能，输入n表示不启动history模式(需要正式服务器支持，所以不要启用)
  - 第五项是js代码检查功能，选ESLint + Prettier
  - 第六项是Lint(代码检查的时机)选Lint on save
  - 第七项是配置文件是否独立
    - `In dedicated config files`表示独立，选这个
    - `In package.json`表示都在package.json文件中
  - 第八项表示是否保存所有的选择项到预设文件
    - 选`y`就会提示保存，并输入预设名称，下次启动创建会显示
    - 选`n`就不会保存预设值
- 创建完成后
  - 执行`cd 项目名称`进入创建的项目目录
  - 执行`npm run serve`启动vue项目
  - 启动完成后，控制台会提示项目的网络地址，一般就是`http://localhost:8080/`
- vuecli创建项目文件和目录说明
  - `public`目录里面是原始文件，出index.html以外不会被
vuecli编译处理
  - `src`目录是vue源码目录，里面的文件会被vuecli编译处理
    - `assets`目录是放置非源码的文件，比如图片，视频等
    - `components`目录是放置公用组件
    - `views`目录是视频（页面）文件
    - `App.vue`是顶级视图文件，一般就只有路由视图
    - `main.js`是入口js
  - `.browserslistrc`是browsers启用配置
  - `.eslintrc.js`重要！！！代码检测工具配置，需要和格式化工具配置配合
  - `.gitignore`是git忽略文件列表配置
  - `.prettierrc.js`是prettier格式化配置，和eslint要一致
  - `bable.config.js`bable是js编译工具，转换新版本js到浏览器支持的旧版本
  - `package-lock。json`,确保npm安装的模块版本一致，自动生成的
  - `package.json`,项目依赖的npm安装模块配置文件
  - `vue.config.js`vuecli配置文件
