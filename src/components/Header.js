import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'
import { firebase } from '../firebase/firebase'
import { history } from '../routers/AppRouter'

const Header = () => {
    const { authDispatch } = useContext(Context)

    const onClick = () => {
        firebase.auth().signOut().then(() => {
            authDispatch({
                type: 'LOGOUT'
            })
            localStorage.setItem('uid', '')
            history.push('/')
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>
            <Link to="/dashboard">
                <h1>MyBlog</h1>
            </Link>
            <button onClick={onClick}>Logout</button>
        </div >
    )
}

export default Header