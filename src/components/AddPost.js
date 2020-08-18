import React, { useContext } from 'react'
import PostForm from './PostForm'
import { Context } from '../context/context'
import database from '../firebase/firebase'

const AddPost = (props) => {

    const { dispatch } = useContext(Context)
    const { history } = props
    const onSubmit = ({title, body}) => {
        dispatch({
            type: 'ADD_POST',
            post: {
                title: title,
                body: body
            }
        })
        database.ref('posts').push({title, body}).then((ref) => {
            console.log("Successfully pushed data to firebase")
            history.push('/dashboard')
        })
    } 

    return (
        <div>
            <PostForm onSubmit={onSubmit}/>
        </div>
    )
}
export default AddPost