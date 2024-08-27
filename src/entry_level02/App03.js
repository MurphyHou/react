import { useState, useEffect } from 'react'

const URL = 'http://geek.itheima.net/v1_0/channels'

/**
 * 1.声明一个use大头的函数
 * 2.在函数内封装可复用的逻辑
 * 3.吧组件中用到的状态或者回调return出去
 * 4.在组件中使用这个逻辑，就执行这个函数，解构出来的状态和回调进行使用
 * @return {value, function}
 */
function useToggle() {
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)

  return {
    value,
    toggle,
  }
}

function App() {
  const { value, toggle } = useToggle()
  const [list, setList] = useState([])

  useEffect(() => {
    async function getList() {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      App
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
