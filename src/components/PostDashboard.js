import React, { useEffect, useContext } from 'react'
import PostFilter from './PostFilter'
import { Context } from '../context/context'
import PostList from './PostList'
import database from '../firebase/firebase'

const PostDashboard = (props) => {

    const { auth, dispatch } = useContext(Context)

    useEffect(() => {
        const posts = []
        database.ref(`users/${auth.uid}/posts`).once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    posts.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
            }).then(() => {
                if (posts) {
                    dispatch({ type: 'POPULATE_POSTS', posts })
                }
            })
    }, [auth.uid, dispatch])

    return (
        <div>
            <PostFilter />
            <PostList />
        </div>
    )

}

export default PostDashboard