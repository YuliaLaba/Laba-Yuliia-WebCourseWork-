import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (getTotalCartAmount() === 0) {
        navigate('/')
    }
  }, [])

  return (
    <form className='place-order'>
        /*<div className="place-order-left">
        <p className='title'>Інформація для доставки</p>
        <div className='multi-fields'>
          <input type="text" placeholder="Ім'я"/>
          <input type="text" placeholder='Прізвище'/>
        </div>
        <input type="text" placeholder='Номер телефону'/>
        <div className='multi-fields'>
          <input type="text" placeholder="Місто"/>
          <input type="text" placeholder='Поштовий індекс'/>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder="Вулиця"/>
          <input type="text" placeholder='Будинок/квартира'/>
        </div>
        <input type="text" placeholder="Електронна адреса"/>
        
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Підсумок</h2>
          <div>
            <div className="cart-total-details">
              <p>Вартість</p>
              <p>{getTotalCartAmount()} грн</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Доставка</p>
              <p>{80} грн</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Разом</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+80} грн</p>
            </div>
          </div>
          <button>ПЕРЕЙТИ ДО ОПЛАТИ</button>
        </div>
        </div>
      
    </form>
  )
}

export default PlaceOrder
