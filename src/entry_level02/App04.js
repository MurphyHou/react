import { useState, useEffect } from 'react'

const Son = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Son组件定时器执行了')
    }, 1000)

    return () => {
      console.log('Son组件卸载了')
      clearInterval(timer)
    }
  }, [])
  return <div>this is Son</div>
}
const App = () => {
  // const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  // 1. 没有依赖项， 初始 + 组件更新（更新就会执行）
  /*  useEffect(() => {
    console.log('useEffect副作用函数执行了')
  }) */

  // 2. 传入空数组依赖项，初始执行一次
  /*  useEffect(() => {
    console.log('useEffect副作用函数执行了')
  }, []) */

  // 3. 传入特定依赖项，初始 + 依赖项变化时执行
  /* useEffect(() => {
    console.log('useEffect副作用函数执行了')
  }, [count])
 */
  return (
    <div>
      <h2>App</h2>
      {show && <Son />}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  )
}

export default App
