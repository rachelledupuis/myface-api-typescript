import React from 'react'

export function Post( {post} ) {
    return (
        <div>
            <img src={post.imageUrl} />
            <p>posted by {post.postedBy.username} at {post.createdAt}</p>
            <p>{post.message}</p>
        </div>
    )
}