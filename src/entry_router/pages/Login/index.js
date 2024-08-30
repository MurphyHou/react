import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Login</h2>
      {/* 声明式写法 */}
      <Link to='/article'>去文章</Link>
      {/* 命令式写法 */}
      {/*   <button
        onClick={() => {
          navigate('/article?id=1001&name=zhangsan')
        }}
      >
        跳文章 searchParams传参
      </button> */}
      <button
        onClick={() => {
          navigate('/article/1001/Murphy')
        }}
      >
        跳文章 params传参
      </button>
    </div>
  )
}
export default Login
