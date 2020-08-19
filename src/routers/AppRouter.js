import React, { useContext, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import PostDashboard from '../components/PostDashboard'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import Login from '../components/Login'
import Footer from '../components/Footer'
import { Context } from '../context/context'
import LoadingPage from '../components/LoadingPage'

export const history = createHistory()

const AppRouter = () => {

    const { auth, authDispatch } = useContext(Context)
    let uid = undefined
    if (auth.uid) {
        uid = auth.uid
    }
    else if (localStorage.getItem('uid')) {
        uid = localStorage.getItem('uid')
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
                    <Footer />
                </div>
                :
                <div className="login">
                    {history.push('/login')}
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/loading" component={LoadingPage} />
                    </Switch>
                    <Footer />
                </div>

            }
        </Router>

    )
}
export default AppRouter
