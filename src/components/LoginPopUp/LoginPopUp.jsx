import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUp.css'

function LoginPopUp({setShowLogin}) {

    const [currState, setCurrState] = useState("Увійти")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""></img>
            </div>
            <div className="login-popup-input">
                {currState==="Увійти"?<></>:<input type="text" placeholder="Прізвище Ім'я" required />}
                <input type="email" placeholder="Електронна пошта" required />
                <input type="password" placeholder="Пароль" required />
            </div>
            <button>{currState==="Зареєструватись"?"Зареєстуватись":"Увійти"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Я погоджуюсь з правилами користування та політикою конфіденційності.</p>
            </div>
            {currState==="Увійти"
                ?<p>Створити <span onClick={()=>setCurrState("Зареєструватись")}>новий обліковий запис</span>?</p>
                :<p>Вже маєте обліковий запис? <span onClick={()=>setCurrState("Увійти")}>Увійти</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp
