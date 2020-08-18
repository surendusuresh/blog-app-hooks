import React, { useReducer } from 'react'
import postReducer from '../reducers/posts'
import filterReducer from '../reducers/filter'
import authReducer from '../reducers/auth'

export const Context = React.createContext()

const ContextProvider = (props) => {

    const [ posts, dispatch ] = useReducer(postReducer, [])
    const [ filter, filterDispatch ] = useReducer(filterReducer, '')
    const [ auth, authDispatch ] = useReducer(authReducer, {})

    return(
        <Context.Provider value={{ posts, dispatch, filter, filterDispatch, auth, authDispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider