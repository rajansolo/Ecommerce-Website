import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({reducer ,initialState, children }) => {
   return(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
   )

}; 

//This is how we use it inside a component(its used in headercomponent)
export const useStateValue = () => useContext(StateContext);