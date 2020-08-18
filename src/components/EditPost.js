import React, { useContext } from 'react'
import PostForm from './PostForm'
import { Context } from '../context/context'
import database from '../firebase/firebase'

const EditPost = (props) => {
    const { posts, dispatch } = useContext(Context)
    const { history } = props
    const post = posts.find((post) => post.id === props.match.params.id) || ''

    const onSubmit = (post) => {
        dispatch({
            type: 'EDIT_POST',
            id: props.match.params.id,
            updates: {...post}
        })
        database.ref(`posts/${props.match.params.id}`).update(post).then(() => {
            history.push('/dashboard')
        })
    }

    const onClick = () => {
        dispatch({
            type: 'REMOVE_POST',
            id: props.match.params.id
        })
        database.ref(`posts/${props.match.params.id}`).remove().then(() => {
            history.push('/dashboard')
        })
    }

    return (
        <div>
            <PostForm title={post.title} body={post.body} onSubmit={onSubmit}/>
            <button onClick={onClick}>Remove</button>
        </div>
    )
}

export default EditPost