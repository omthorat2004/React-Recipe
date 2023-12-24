import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import './create.css';
const Create = () => {
    let navigate = useNavigate()
    const {recipes,setRecipes} = useContext(userContext)
    const [formData,setFormData] = useState({
        title:'',
        method:'',
        cookingTime:'',
        ingredients:[]
    })
    const ingredientInput = useRef(null)
    const [newIngredients,setIngredient] = useState('')
    
    const handleAdd = (e)=>{
        e.preventDefault()
        const ing = newIngredients.trim()
        if(ing && !formData.ingredients.includes(ing)){
            setFormData((prev)=>({...prev,ingredients:[...prev.ingredients,ing]}))

        }
        setIngredient('')
        ingredientInput.current.focus()
    }
    const handleChange = (e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        setRecipes((prev)=>{
           return [...prev,formData]
        })
        navigate('/')
    }
  return (
    <div className='create'>
        <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} >
        <label>
        <span>Recipe Title:</span>
        <input 
        type='text'
        onChange={handleChange}
        name='title'
        value={formData.title} required/> 
        </label>
        <label>
            <span>Recipe ingredients:</span>
            <div className='ingredients'>
                <input type='text' ref={ingredientInput}
                onChange={(e)=> setIngredient(e.target.value)}
                value={newIngredients} />
                <button className='btn' onClick={handleAdd} type='button'>add</button>
                <p>Current Ingredients: {formData.ingredients.map((e)=><em>{e}, </em>)}</p>
            </div>
        </label>
        <label>
            <span>Recipe Method:</span>
            <textarea name='method' cols="30" rows="11" onChange={handleChange} required></textarea>
        </label>
        <label>
            <span>Cooking Time (minutes):</span>
            <input type='number' name='cookingTime' value={formData.cookingTime} required onChange={handleChange}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Create;
