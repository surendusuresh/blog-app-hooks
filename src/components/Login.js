import React, { useContext } from 'react'
import { firebase, googleAuthProvider } from '../firebase/firebase'
import { Context } from '../context/context'
import { history } from '../routers/AppRouter'

const Login = () => {

    const { authDispatch } = useContext(Context)

    const onClick = () => {
        history.push('/loading')
        firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            authDispatch({
                type: 'LOGIN',
                uid: result.user.uid
            })
            history.push('/dashboard')
        }).catch((e) => console.log(e))
    }

    return (
        <div className="login__box">
            <button className="button" onClick={onClick}>Login</button>
            <h3 className="login__title">What's on your mind!</h3>
        </div>
    )
}

export default Login