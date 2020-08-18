import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'

const PostFilter = () => {

    const { filter, filterDispatch } = useContext(Context)
    const onChange = (e) => {
        filterDispatch({
            type: 'SET_FILTER',
            filter: e.target.value
        })
    }
    return (
        <div>
            <input
                placeholder="Search posts"
                value={filter}
                onChange={onChange}
            />
            <Link to="/create">Add Post</Link>
        </div>
    )

}
export default PostFilter