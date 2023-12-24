import React, { useContext } from 'react';
import Card from '../../Components/Card';
import { userContext } from '../../Context/Context';
import './search.css';
const Search = () => {
  const {filter} = useContext(userContext)
  console.log(filter)
  return (
    <div >
      {
      filter.length!=0 ?  filter.map((recipe)=>{
          return <div>
            <p>Recipes with include search name </p>
            <Card id={recipe.id} 
                 title={recipe.title}
                 cookingTime={recipe.cookingTime}
                 method={recipe.method}/>
                 </div>
        }):<p>No such recipes is present</p>
      }
    </div>
  );
}

export default Search;
