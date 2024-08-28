import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
  name: 'channel',
  // 初始化state
  initialState: {
    channelList: [],
  },
  // 修改状态方法
  reducers: {
    setChannelList: (state, action) => {
      state.channelList = action.payload
    },
  },
})

const { setChannelList } = channelStore.actions
// 异步请求方法
export const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch(setChannelList(res.data.data.channels))
  }
}

const reducer = channelStore.reducer
export default reducer
