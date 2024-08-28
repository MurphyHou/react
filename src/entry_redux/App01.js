import { useState } from 'react'

// 子组件传递数据给父组件
// 核心：在子组件中调用父组件中的函数并传递实参
function A({ getAName }) {
  const name = 'this is A name'
  return (
    <div className='son'>
      <h5>this is A component</h5>
      <button onClick={() => getAName(name)}>sendName</button>
    </div>
  )
}
function B(props) {
  return (
    <div className='son'>
      <h5>this is B component</h5>
      <p>This is receive A name: {props.aName}</p>
    </div>
  )
}

function App() {
  const [aName, setAName] = useState('')
  const getAName = (name) => {
    setAName(name)
  }
  return (
    <div className='app'>
      <h2>this is App</h2>
      <A getAName={getAName} />
      <hr />
      <B aName={aName} />
    </div>
  )
}

export default App
