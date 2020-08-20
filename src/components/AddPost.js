import React, { useContext } from 'react'
import PostForm from './PostForm'
import { Context } from '../context/context'
import database from '../firebase/firebase'

const AddPost = (props) => {

    const { dispatch } = useContext(Context)
    const { history } = props
    const uid = localStorage.getItem('uid')
    const onSubmit = ({title, body}) => {
        dispatch({
            type: 'ADD_POST',
            post: {
                title: title,
                body: body
            }
        })
        database.ref(`users/${uid}/posts`).push({title, body}).then((ref) => {
            console.log("Successfully pushed data to firebase")
            history.push('/dashboard')
        })
    } 

    return (
        <div className="list__container">
            <h2 className="page__title">Add Post</h2>
            <PostForm onSubmit={onSubmit}/>
        </div>
    )
}
export default AddPost