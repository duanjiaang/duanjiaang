# vue模板项目

- 创建流程
  - 执行`vue create vue-router-template`创建模板项目
  - 选项，通过上下移动，多选项用空格选择，回车确认
    - 选`Manually select features`
    - 选中`Choose Vue version`,`Babel`,`Router`,`Linter / Formatter`
    - 选`2.x`
    - 输入`n`后回车确认
    - 选`ESLint + Prettier`
    - 选`Lint on save`
    - 选`In dedicated config files`
    - 输入`n`后回车确认
  - 创建完成后单独用vscode打开项目目录进行配置

- 项目的配置
  - vscode部分
    - 插件
      - `Bracket Pair Colorizer`
      - `HTML CSS Support`
      - `Prettier - Code formatter`
      - `Vetur`
    - 工作区配置：[配置文件](settings.json)
    - 工作区配置文件打开方式：文件菜单-->首选项-->设置，点击工作区，在点击右上角的打开设置(json)按钮
  - 项目配置部分
    - 基础配置
      - 创建[.prettierrc.js](vue-router-template/.prettierrc.js)
      - 修改[.eslintrc.js](vue-router-template/.eslintrc.js)
      - 创建[vue.config.js](vue-router-template/vue.config.js)
    - 项目文件配置
      - 删除`public/favicon.ico`
      - 修改[public/index.html](vue-router-template/public/index.html)
      - 删除`src/assets/`目录中的所有文件
      - 删除`src/components/`目录中的所有文件
      - 删除`src/views/About.vue`
      - 修改[src/router/index.js](vue-router-template/src/router/index.js)
      - 修改[src/views/Home.vue](vue-router-template/src/views/Home.vue)
      - 修改[src/App.vue](vue-router-template/src/App.vue)
      - 格式化所有代码文件
