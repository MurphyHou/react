import { useState, useMemo } from 'react'
import './index.scss'
import dayjs from 'dayjs'
import _ from 'lodash'
import classNames from 'classnames'
import { NavBar, DatePicker } from 'antd-mobile'
import { useSelector } from 'react-redux'

const Month = () => {
  //按月做数据分组
  const billList = useSelector((state) => state.bill.billList)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  console.log(monthGroup)

  const [dateVisible, setDateVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(dayjs(new Date()).format('YYYY-MM'))
  const onConfirm = (date) => {
    const formatDate = dayjs(date).format('YYYY-MM')
    setCurrentDate(formatDate)
    setDateVisible(false)
  }

  return (
    <div className='month '>
      <NavBar backArrow={false}>月度收支</NavBar>
      <div className='month-background-img h-full px-base py-base'>
        <div className='flex items-center mb-base text-bold' onClick={() => setDateVisible(true)}>
          <span>{currentDate}月 账单</span>
          <span className={classNames('arrow', dateVisible && 'expand')}></span>
        </div>
        <div className='flex justify-around'>
          <div className='flex col items-center'>
            <span className='text-xl text-bold'>{0}</span>
            <p>支出</p>
          </div>
          <div className='flex col items-center'>
            <span className='text-xl text-bold'>{0}</span>
            <p>收入</p>
          </div>
          <div className='flex col items-center'>
            <span className='text-xl text-bold'>{0}</span>
            <p>结余</p>
          </div>
        </div>
      </div>
      <DatePicker
        precision='month'
        title='记账日期'
        visible={dateVisible}
        max={new Date()}
        onCancel={() => setDateVisible(false)}
        onConfirm={onConfirm}
        onClose={() => setDateVisible(false)}
      />
    </div>
  )
}

export default Month
