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
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard">
                        <h1>MyBlog</h1>
                    </Link>
                    <button className="button button__no-background" onClick={onClick}>Logout</button>
                </div>
            </div>

        </div >
    )
}

export default Header