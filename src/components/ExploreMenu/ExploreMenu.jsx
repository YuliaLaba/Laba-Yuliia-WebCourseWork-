import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './ExploreMenu.css'


const ExploreMenu = ({category, setCategory}) => {

  const {menu_list} = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Ознайомтеся з меню</h1>
        <p className='explore-menu-text'>Обирайте серед широкого асортименту страв кухонь різних народів та насолоджуйтеся цікавими поєднаннями смаків</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} className={category==item.menu_name?"active":""} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    <hr />
    </div>
    
  )
}

export default ExploreMenu
