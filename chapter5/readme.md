* 目录结构
    * backend 后端服务内容
    * business 业务配置中心，模拟云函数架构存储函数内容的地方
    * server 服务端运行逻辑
    * workspace 模拟开发者工作空间

* 运行方式
先打开终端运行
```
node server/test.js
```

再打开另一个终端运行
```
node backend/run.js
```

然后打开浏览器访问`http://localhost:3000/play?columnid=1`