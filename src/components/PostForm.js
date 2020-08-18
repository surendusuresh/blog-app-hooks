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
        <form onSubmit={submitPost}>
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Post content"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button>Save Post</button>
        </form>
    )

}

export default PostForm