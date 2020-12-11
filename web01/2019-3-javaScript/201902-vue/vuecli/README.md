# vue带路由的模板项目

- 确保已经成功安装过nodejs和vuecli
- 第一次需要执行`npm install`初始化项目
- 每次开发项目需要执行`npm run serve`
- 执行`npm run build`可以打包项目，方便发布到正式服务器
- 使用模板项目的方法
  - 删除`node_modules`目录
  - 删除`dist`目录
  - 复制本文件夹到新位置
  - 修改复制后的文件夹名称为项目名称
  - 修改`package.json`中的项目名称和版本号
  - 修改`package-lock.json`中的项目名称和版本号
  - 执行上面说明的项目初始化过程

- 第三方js导入(npm方式)
  - `npm install --save qs`
  - `npm install --save axios`
  - `npm install --save js-md5`

- vue总结
  - vue页面构成
    - template标记里面是html页面，根节点只能有一个
    - script标记里面是js内容，格式是导出vue实例语法，el属性替换成name，因为不需要绑定页面元素，直接和template页面绑定，使用import导入其它js
    - style标记里面是css内容，可以附加scoped属性，表示css都是局部的，不会和其它vue页面冲突，使用@import导入其它css
  - App.vue文件是主页面文件，里面有router-view标记来切换子页面
  - main.js文件是主配置文件，插件，路由启动，指令，过滤器都在本文件中配置
  - router/index.js是路由主配置文件
    - 路由配置为三个属性
      - name：路由的名称，最好首字母大写
      - path：路由在地址栏中的访问路径，放置#符号的后面
      - component：路由访问的真实vue页面文件路径
  - vue相关功能
    - data：必须是function，返回值是json，json中所有数据都可以在vue页面中使用，反过来vue页面使用的数据必须在data中定义(也可以是指令和computed产生的结果)
    - methods：事件相关function的定义，供页面事件处理调用
    - computed：计算属性，可以将data中的变量处理后返回供页面使用，和data使用方式一样，但是不能用于v-model
    - filter：过滤器，用于页面数据处理，写在数据表达式的后面，用|分隔，将|前面的数据传入|后面的过滤中处理后显示在页面上面
    - directive：指令，用于扩展页面元素的虚拟属性，统一用v-开头，可以操作页面元素，格式为在元素里面添加v-指令名称，作用是将指令所在元素传入指令对应的js进行处理
    - plugin：插件，用于扩展vue实例的属性，扩展的属性，不论是对象还是function，名称都要求用$符号开头，可以在vue实例中直接调用
