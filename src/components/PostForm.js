import React, { useState } from 'react'

const PostForm = (props) => {

    const [title, setTitle] = useState(props.title || '')
    const [body, setBody] = useState(props.body || '')

    const submitPost = (e) => {
        e.preventDefault()
        props.onSubmit({
            title,
            body
        })
    }

    return (
        <form onSubmit={submitPost} className="form">
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form__input"
            />
            <textarea
                placeholder="Post Content"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="form__textarea"
            />
            <div>
                <button className="button__no-background form__button">Save Post</button>
            </div>
        </form>
    )

}

export default PostForm