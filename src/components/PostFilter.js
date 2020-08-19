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
            <div className="container__content filter">
                <input
                    placeholder="Search posts"
                    value={filter}
                    onChange={onChange}
                    className="filter__input"
                />
                <Link to="/create" className="button__no-background">Add Post</Link>
            </div>
        </div>
    )

}
export default PostFilter