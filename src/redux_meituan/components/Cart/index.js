import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, incrementCount, decrementCount } from '../../store/modules/takeaway'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartList } = useSelector((state) => state.foods)

  const totalPrice = cartList.reduce((pre, item) => pre + item.price * item.count, 0)

  // 控制购物车打开关闭状态
  const [visible, setVisible] = useState(false)
  const onShow = () => {
    if (cartList.length > 0) {
      setVisible(true)
    }
  }

  // 清空购物车
  const onClearCart = () => {
    dispatch(clearCart())
    setVisible(false)
  }

  return (
    <div className='cartContainer'>
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div className={classNames('cartOverlay', visible && 'visible')} onClick={() => setVisible(false)} />
      <div className='cart'>
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div className={classNames('icon', cartList.length && 'fill')} onClick={onShow}>
          {true && <div className='cartCornerMark'>{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className='main'>
          <div className='price'>
            <span className='payableAmount'>
              <span className='payableAmountUnit'>¥</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className='text'>预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {cartList.length ? <div className='goToPreview'>去结算</div> : <div className='minFee'>¥20起送</div>}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', visible && 'visible')}>
        <div className='header'>
          <span className='text'>购物车</span>
          <span className='clearCart' onClick={() => onClearCart()}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className='scrollArea'>
          {cartList.map((item) => {
            return (
              <div className='cartItem' key={item.id}>
                <img className='shopPic' src={item.picture} alt='' />
                <div className='main'>
                  <div className='skuInfo'>
                    <div className='name'>{item.name}</div>
                  </div>
                  <div className='payableAmount'>
                    <span className='yuan'>¥</span>
                    <span className='price'>{item.price}</span>
                  </div>
                </div>
                <div className='skuBtnWrapper btnGroup'>
                  <Count count={item.count} onMinus={() => dispatch(decrementCount(item.id))} onPlus={() => dispatch(incrementCount(item.id))} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
