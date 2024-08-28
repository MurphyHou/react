import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    // 购物车列表
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    // 更改状态activeIndex
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    // 添加到购物车
    setCarList(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        // state.cartList.push(action.payload)
        state.cartList.push({ ...action.payload, count: 1 })
      }
    },
    // 增加数量
    incrementCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload)
      item.count++
    },
    // 减少数量
    decrementCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload)
      if (item.count === 1) {
        const index = state.cartList.findIndex((item) => item.id === action.payload)
        state.cartList.splice(index, 1)
      } else {
        item.count--
      }
    },
    // 清空购物车
    clearCart(state) {
      state.cartList = []
    },
  },
})

const { setFoodsList, changeActiveIndex, setCarList, incrementCount, decrementCount, clearCart } = foodsStore.actions
// 异步数据
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}

export { fetchFoodsList, changeActiveIndex, setCarList, clearCart, incrementCount, decrementCount }
export default foodsStore.reducer
