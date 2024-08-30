// 账单列表相关store
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: [],
  },
  reducers: {
    // 同步修改方法
    setBillList(state, action) {
      state.billList = action.payload
    },
  },
})

// 解构actionCreater函数
const { setBillList } = billStore.actions

// 异步修改方法
const getBillList = () => {
  return async (dispatch) => {
    // 异步请求数据
    const { data } = await axios.get('http://localhost:3004/ka')
    // 触发同步reducer方法
    dispatch(setBillList(data))
  }
}

export { getBillList }
// 导出reducer
export default billStore.reducer
