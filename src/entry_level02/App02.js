import { createContext, useContext } from 'react'

const MsgContext = createContext()
const style = {
  border: '1px solid #707070',
  padding: '10px',
}
function A() {
  return (
    <div style={style}>
      <h5>I am A !</h5>
      <B />
    </div>
  )
}
function B() {
  const msg = useContext(MsgContext)
  return (
    <div style={style}>
      <h5>I am B</h5>
      <p>{msg}</p>
    </div>
  )
}

function App() {
  const msg = 'this is App context'

  return (
    <MsgContext.Provider value={msg}>
      <div className='app'>
        <h2 style={{ color: 'red' }}>Here is App</h2>
        <A />
      </div>
    </MsgContext.Provider>
  )
}

export default App
