import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) => (
    <Link  className="list" to={`/edit/${props.id}`}>
        <h3>{props.title}</h3>
    </Link>
)

export default PostListItem