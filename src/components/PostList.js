import React, { useContext } from 'react'
import { Context } from '../context/context'
import PostListItem from './PostListItem'

const PostList = () => {

    const { posts, filter } = useContext(Context)

    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()) || post.body.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            { filteredPosts.map((post) => <PostListItem key={post.id} {...post} />)}
        </div>
    )
}

export default PostList