import React, { useContext } from 'react';
import Card from '../../Components/Card';
import { userContext } from '../../Context/Context';
import './home.css';
const Home = () => {
    const {recipes} = useContext(userContext)
    console.log(recipes)
    
  return (
    <div className='recipe-list'>
      {recipes.map((recipe)=>{
        return <Card id={recipe.id} 
                 title={recipe.title}
                 cookingTime={recipe.cookingTime}
                 method={recipe.method}/>
      })}
    </div>
  );
}

export default Home;
