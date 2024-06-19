import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Назва</p>
          <p>Ціна</p>
          <p>Кількість</p>
          <p>Сума</p>
          <p>Вилучити</p>
        </div>
      <br />
      <hr />
      {food_list.map((item, index) =>{
          if(cartItems[item._id]>0){
            return (
              <div key ={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} грн</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} грн</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
      })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Підсумок</h2>
          <div>
            <div className="cart-total-details">
              <p>Вартість</p>
              <p>{getTotalCartAmount()} грн</p>
            </div>
            <div className="cart-total-details">
              <p>Доставка</p>
              <p>{80} грн</p>
            </div>
            <div className="cart-total-details">
              <b>Разом</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+80} грн</b>
            </div>
          </div>
          <button onClick={(()=>navigate('/order'))}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Якщо у Вас є промокод, введіть його тут</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Промокод'/>
              <button>Підтвердити</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
