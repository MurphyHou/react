function Son(props) {
  /**
   * 父组件向子组件传递数据
   * 1.父组件传递数据 子组件标签身上绑定属性
   * 2. 子组件接受数据 props的参数
   */
  // props: 对象里面包含了父组件传递过来的所有数据
  console.log('son', props)
  return (
    <div className='son'>
      this is son, {props.name}, jsx: {props.child}
      <h5>特殊 children</h5>
      {props.children}
    </div>
  )
}
function App() {
  const name = 'this is app name'
  return (
    <div className='app'>
      <Son name={name} age={18} isTrue={true} list={[1, 2, 3]} obj={{ name: 'zhangsan' }} cb={() => console.log('cb')} child={<div>this is child</div>}>
        <p>this is props children</p>
      </Son>
    </div>
  )
}

export default App
