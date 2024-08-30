import { Outlet, Link } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <h2>this is Layout</h2>
      <Link to='/'>Board</Link>
      <Link to='/about'>About</Link>
      {/* 配置二级路由的出口 */}
      <Outlet />
    </div>
  )
}

export default Layout
