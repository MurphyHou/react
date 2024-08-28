// 项目入口文件
import React from 'react'
import ReactDOM from 'react-dom/client'
// import store from './entry_redux/store'
import store from './redux_meituan/store'
import { Provider } from 'react-redux'

// 项目根组件
// import App from './entry_redux/App'
import App from './redux_meituan/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
