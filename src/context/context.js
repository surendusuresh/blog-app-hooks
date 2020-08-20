import React, { useReducer, useEffect } from 'react'
import postReducer from '../reducers/posts'
import filterReducer from '../reducers/filter'
import authReducer from '../reducers/auth'

export const Context = React.createContext()

const ContextProvider = (props) => {


    const cachedPosts = JSON.parse(localStorage.getItem('blogapp_posts'))
    const cachedUID = JSON.parse(localStorage.getItem('blogapp_auth'))

    const [ posts, dispatch ] = useReducer(postReducer, cachedPosts || [])
    const [ filter, filterDispatch ] = useReducer(filterReducer, '')
    const [ auth, authDispatch ] = useReducer(authReducer, cachedUID || {})


    useEffect(() => {
        localStorage.setItem('blogapp_posts', JSON.stringify(posts))
    }, [posts])

    useEffect(() => {
        localStorage.setItem('blogapp_auth', JSON.stringify({uid: auth.uid}))
    }, [auth.uid])

    return(
        <Context.Provider value={{ posts, dispatch, filter, filterDispatch, auth, authDispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider