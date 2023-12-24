import React, { createContext, useState } from 'react';
import { data } from '../data.js';
export const userContext = createContext("")

const Context = ({children}) => {
    const [recipes,setRecipes] = useState(data)
    const [filter,setFilter] = useState([])
  return (
    <userContext.Provider value={{recipes:recipes,filter:filter,setRecipes,setFilter}}>
        {children}
    </userContext.Provider>
  );
}

export default Context;
