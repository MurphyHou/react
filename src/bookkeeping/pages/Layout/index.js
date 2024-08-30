import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { BillOutline, AddCircleOutline, CalculatorOutline } from 'antd-mobile-icons'
import { getBillList } from '@/bookkeeping/store/modules/billStore'
import './index.scss'
const Layout = () => {
  const tabs = [
    {
      key: '/',
      title: '月度账单',
      icon: <BillOutline />,
    },
    {
      key: '/new',
      title: '记账',
      icon: <AddCircleOutline />,
    },
    {
      key: '/year',
      title: '年度账单',
      icon: <CalculatorOutline />,
    },
  ]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // 获取账单数据
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])

  const switchTabBar = (key) => {
    navigate(key)
  }

  return (
    <div className='layout'>
      <div className='container'>
        <Outlet />
      </div>
      <div className='footer'>
        <TabBar onChange={switchTabBar}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout
