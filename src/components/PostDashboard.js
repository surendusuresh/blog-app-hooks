import React, { useEffect, useContext } from 'react'
import PostFilter from './PostFilter'
import { Context } from '../context/context'
import PostList from './PostList'
import database from '../firebase/firebase'

const PostDashboard = (props) => {

    const { dispatch } = useContext(Context)

    useEffect(() => {
        const posts = []
        const uid = localStorage.getItem('uid')
        database.ref(`users/${uid}/posts`).once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    posts.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
                localStorage.setItem('posts', JSON.stringify(posts))
            }).then(() => {
                if (posts) {
                    dispatch({ type: 'POPULATE_POSTS', posts })
                }
            })
    }, [dispatch])

    return (
        <div>
            <PostFilter />
            <PostList />
        </div>
    )

}

export default PostDashboard