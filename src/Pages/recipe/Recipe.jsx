import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import './recipe.css';
const Recipe = () => {
    let {id} = useParams()
    const {recipes} = useContext(userContext)
    id=id-1;
  return (
    <div className='recipe'>
      <h2 className='page-title'>{recipes[id].title}</h2>
      <p>Takes {recipes[id].cookingTime} to make</p>
      <ul>
        {recipes[id].ingredients.map((ing)=>{
                 return <li key={ing}>{ing}</li>
        })}
      </ul>
      <p className='method'>{recipes[id].method}</p>
    </div>
  );
}

export default Recipe;
