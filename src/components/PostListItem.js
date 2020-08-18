import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) => (
    <Link to={`/edit/${props.id}`}>
        <h2>{props.title}</h2>
    </Link>
)

export default PostListItem