import React, { useContext, useState } from 'react'
import PostForm from './PostForm'
import { Context } from '../context/context'
import database from '../firebase/firebase'
import ConfirmationModal from '../components/ConfirmationModal'

const EditPost = (props) => {
    const { dispatch } = useContext(Context)
    const uid = localStorage.getItem('uid')
    const { history } = props
    const posts = JSON.parse(localStorage.getItem('posts'))
    const post = posts.find((post) => post.id === props.match.params.id) || ''
    const [modalOpen, setModalOpen] = useState(undefined)

    const onSubmit = (post) => {
        dispatch({
            type: 'EDIT_POST',
            id: props.match.params.id,
            updates: {...post}
        })
        database.ref(`users/${uid}/posts/${props.match.params.id}`).update(post).then(() => {
            history.push('/dashboard')
        })
    }

    const openModal = () => {
        setModalOpen('true')
    }

    const closeModal = () => {
        setModalOpen(undefined)
    }

    const onClick = () => {
        dispatch({
            type: 'REMOVE_POST',
            id: props.match.params.id
        })
        database.ref(`users/${uid}/posts/${props.match.params.id}`).remove().then(() => {
            history.push('/dashboard')
        })
    }

    return (
        <div className="list__container">
            <h2 className="page__title">Edit Post</h2>
            <PostForm title={post.title} body={post.body} onSubmit={onSubmit}/>
            <button onClick={openModal} className="button__no-background form__button">Remove</button>
            <ConfirmationModal 
                modalOpen={modalOpen}
                handleModalClose={closeModal}
                handleRemovePost={onClick}
            />
        </div>
    )
}

export default EditPost