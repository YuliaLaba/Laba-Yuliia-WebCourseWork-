import React, { useContext, useEffect } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    
  return (
    <div className='food-display' id='food-display'>
        <h2>Найкращі позиції</h2>
        <div className="food-display-list">
            {food_list.map((item)=>{
                //filtration by categories
                if(category==="All" || category===item.category){
                    return <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} image={item.image} price ={item.price}/>
                }
            })}    
        </div>  
    </div>
  )
}

export default FoodDisplay;
