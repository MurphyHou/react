import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'
function App() {
  const { count } = useSelector((state) => state.counter)
  const { channelList } = useSelector((state) => state.channel)
  const dispatch = useDispatch()

  // 使用useEffect触发异步请求数据
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className='app'>
      APP
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <hr />
      <button onClick={() => dispatch(addToNum(10))}>+ 10</button>
      <button onClick={() => dispatch(addToNum(20))}>+ 20</button>
      <h1>{count}</h1>
      <hr />
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
