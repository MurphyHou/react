// 项目入口文件
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './bookkeeping/store'
// 导入路由
// import router from './entry_router/router'
import router from './bookkeeping/router'
// 导入样式AntD mobile
import './bookkeeping/pages/style/theme.css'
import './bookkeeping/pages/style/config.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
