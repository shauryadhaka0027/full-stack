import React, { createContext, useState } from 'react'
export const ContextApi=createContext()
const ContextApiProvider = ({children}) => {
  
  const[cart,setCart]=useState([])
  const[query,setQuery]=useState('chair')
  
  return (
    <ContextApi.Provider value={{cart,setCart,query,setQuery}}>
      {children}
    </ContextApi.Provider>
  )
}

export default ContextApiProvider