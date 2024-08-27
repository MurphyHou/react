import './App.scss'
import { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import avatar from './images/bozai.png'
import dAvatar from './images/avatar-default.png'
import axios from 'axios'

// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'like', text: '最热' },
  { type: 'ctime', text: '最新' },
]

/**
 * @description 使用获取列表的自定义钩子
 * @abstract 该钩子用于初始化一个空数组来存储评论列表，并在组件挂载时异步获取列表数据
 * @return {Object} 包含评论列表和更新评论列表的方法
 */
const useGetList = () => {
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await axios.get('http://localhost:5238/list')
      setCommentList(res.data)
    }
    getList()
  }, [])

  return { commentList, setCommentList }
}

// 封装Item组件
const Item = ({ item, onDelete }) => {
  return (
    <div className='reply-item'>
      <div className='root-reply-avatar'>
        <div className='bili-avatar'>
          <img className='bili-avatar-img' src={item.user.avatar ? item.user.avatar : dAvatar} alt='avatar' />
        </div>
      </div>
      <div className='content-wrap'>
        <div className='user-info'>
          <div className='user-name'>{item.user.uname}</div>
        </div>
        <div className='root-reply'>
          <span className='reply-content'>{item.content}</span>
          <div className='reply-info'>
            <span className='reply-time'>{item.ctime}</span>
            <span className='reply-time'>点赞数:{item.like}</span>
            {item.user.uid === user.uid && <span onClick={() => onDelete(item.rpid)}>删除</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const { commentList, setCommentList } = useGetList()
  // 评论内容
  const [content, setContent] = useState('')
  //删除评论
  const deleteHandle = (id) => {
    setCommentList(commentList.filter((item) => item.rpid !== id))
  }

  // tab高亮
  const [type, setType] = useState('like')
  const handleClickTab = (type) => {
    setType(type)
    // 根据 type 排序
    setCommentList(_.orderBy(commentList, type, 'desc'))
  }

  // 文本域DOM
  const textareaRef = useRef(null)

  // 发布评论
  const handleClickPublish = () => {
    console.log('发布评论', content)

    if (!content) return
    setCommentList([
      ...commentList,
      {
        rpid: uuidv4(),
        user: {
          uid: '9789634',
          avatar: '',
          uname: '赵云',
        },
        content,
        ctime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        like: 86,
      },
    ])
    setContent('')
    textareaRef.current.focus()
  }

  return (
    <div className='app'>
      {/* 导航 Tab */}
      <div className='reply-navigation'>
        <ul className='nav-bar'>
          <li className='nav-title'>
            <span className='nav-title-text'>评论</span>
            {/* 评论数量 */}
            <span className='total-reply'>{10}</span>
          </li>
          <li className='nav-sort'>
            {tabs.map((item) => (
              <span key={item.type} className={classnames('nav-item', { active: type === item.type })} onClick={() => handleClickTab(item.type)}>
                {item.text}
              </span>
            ))}
          </li>
        </ul>
      </div>
      <div className='reply-wrap'>
        {/* 发表评论 */}
        <div className='box-normal'>
          {/* 当前用户头像 */}
          <div className='reply-box-avatar'>
            <div className='bili-avatar'>
              <img className='bili-avatar-img' src={avatar} alt='用户头像' />
            </div>
          </div>
          <div className='reply-box-wrap'>
            {/* 评论框 */}
            <textarea value={content} ref={textareaRef} onChange={(e) => setContent(e.target.value)} className='reply-box-textarea' placeholder='发一条友善的评论' />
            {/* 发布按钮 */}
            <div className='reply-box-send'>
              <div className='send-text' onClick={() => handleClickPublish()}>
                发布
              </div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className='reply-list'>
          {/* 评论项 */}
          {commentList.map((item) => (
            <Item key={item.rpid} item={item} onDelete={deleteHandle} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
