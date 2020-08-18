import React, { useContext, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import PostDashboard from '../components/PostDashboard'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import Login from '../components/Login'
import { Context } from '../context/context'

export const history = createHistory()

const AppRouter = () => {

    const { auth, authDispatch } = useContext(Context)
    let uid = undefined
    if (auth.uid) {
        uid = auth.uid
    }
    else if (sessionStorage.getItem('uid')) {
        uid = sessionStorage.getItem('uid')
    }

    useEffect(() => {
        if (uid) {
            authDispatch({
                type: 'LOGIN',
                uid
            })
        }
    }, [authDispatch, uid])

    return (
        <Router history={history}>
            {uid ?
                <div>
                    <Header />
                    <Switch>
                        <Route path="/dashboard" component={PostDashboard} exact={true} />
                        <Route path="/create" component={AddPost} />
                        <Route path="/edit/:id" component={EditPost} />
                    </Switch>
                </div>
                :
                <Login />
            }
        </Router>

    )
}
export default AppRouter
