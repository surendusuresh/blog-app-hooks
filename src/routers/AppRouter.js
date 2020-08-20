import React, { useContext } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import PostDashboard from '../components/PostDashboard'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import Login from '../components/Login'
import Footer from '../components/Footer'
import LoadingPage from '../components/LoadingPage'
import { Context } from '../context/context'

export const history = createHistory()

const AppRouter = () => {

    const { auth } = useContext(Context)

    return (
        <Router history={history}>
            { auth.uid ?
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
                    <Switch>
                        <Route path="/" component={Login} />
                        <Route path="/loading" component={LoadingPage} />
                    </Switch>
                    <Footer />
                </div>
            }
        </Router>

    )
}
export default AppRouter
