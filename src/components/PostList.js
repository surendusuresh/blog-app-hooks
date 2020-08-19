import React, { useContext } from 'react'
import { Context } from '../context/context'
import PostListItem from './PostListItem'

const PostList = () => {

    const { posts, filter } = useContext(Context)
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()) || post.body.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div className="list__container">
            <h2 className="page__title">Post Topics</h2>
            <div>
                {
                    filteredPosts.length === 0 ? (
                        <div className="form__error">
                            <span>No Posts. Click Add Post to begin.</span>
                        </div>
                    ) :
                        (
                            filteredPosts.map((post) => <PostListItem key={post.id} {...post} />)
                        )
                }
            </div>
        </div>
    )
}

export default PostList