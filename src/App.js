// 项目根组件
import { useState } from 'react'

const Button = () => {
  return <div>Button</div>
}
function App() {
  const [count, setCount] = useState(0)

  const handClick = () => {
    console.log('click', count)

    setCount(count + 1)
  }

  const [from, setFrom] = useState({ name: 'Jack' })

  const changeFrom = () => {
    setFrom({ ...from, name: 'Murphy' })
  }
  return (
    <div className='App'>
      <Button></Button>
      <button onClick={handClick}>{count}</button>
      <button onClick={changeFrom}>修改From {from.name}</button>
    </div>
  )
}

export default App
