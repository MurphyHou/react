import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  // 初始化state
  initialState: {
    count: 0,
  },
  // 修改状态方法 同步方法 支持直接修改
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    addToNum: (state, action) => {
      state.count += action.payload
    },
  },
})

// 获取方法actions和reducer
const { actions, reducer } = counterStore
const counterReducer = reducer
// 解构actions并导出
export const { increment, decrement, addToNum } = actions

// 默认导出reducer
export default counterReducer
