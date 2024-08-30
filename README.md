# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

## 项目数据运行

1. json-server 命令合并
   `
"scripts": {
     "start": "craco start & npm run serve",
},`

2. redux_meitua 目录数据修改 package.json 文件 scripts 脚本
   `
"scripts": {
   "serve": "json-server server/data.json --port 3004"
},`
