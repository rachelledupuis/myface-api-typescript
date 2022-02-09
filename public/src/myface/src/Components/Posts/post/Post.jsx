import React from 'react'
import './Post.scss';

export function Post( {post} ) {
    return (
        <div className='post'>
            <img className='image' src={post.imageUrl} />
            {
            post.postedBy !== undefined
                ? <p className='user-info'>Posted by {post.postedBy.name} on {post.createdAt}</p>
                : <p className='user-info'>{post.createdAt}</p>
            }
            <p className='message'>{post.message}</p>
        </div>
    )
}