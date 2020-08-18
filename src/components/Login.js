import React, { useContext } from 'react'
import { firebase, googleAuthProvider } from '../firebase/firebase'
import { Context } from '../context/context'
import { history } from '../routers/AppRouter'

const Login = () => {

    const { auth, authDispatch } = useContext(Context)
    
    const onClick = () => {
        if (!auth.uid) {
            firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
                authDispatch({
                    type: 'LOGIN',
                    uid: result.user.uid
                })
                sessionStorage.setItem('uid', result.user.uid)
                history.push('/dashboard')
            }).catch((e) => console.log(e))
        }
    }

    return (
        <div>
            <button onClick={onClick}>Login</button>
        </div>
    )
}

export default Login