import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import './searchbar.css';

const Searchbar = () => {

  const [term,setTerm] = useState('')
  let navigate = useNavigate()
  const {recipes,filter,setFilter} = useContext(userContext)
  
  const handleSubmit = (e)=>{

    e.preventDefault()
    setFilter((prev)=>{
      return recipes.filter((obj)=>{
        return obj.title.includes(term)
      })
    })
    setTerm('')
    navigate('/search')
  }
  return (
    <div className='searchbar' >
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search :</label>
        <input 
           type='text'
           value={term}
           onChange={(e)=> setTerm(e.target.value)}
           required
           />
           <button className='btn btn-light'>Submit</button>
      </form>
    </div>
  );
}

export default Searchbar;
