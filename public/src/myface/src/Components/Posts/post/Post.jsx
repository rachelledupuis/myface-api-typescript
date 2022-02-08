import React from 'react'

export function Post( {post} ) {
    return (
        <div>
            <img src={post.imageUrl} />
            {
            post.postedBy !== undefined
                ? <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
                : <p>{post.createdAt}</p>
            }
            <p>{post.message}</p>
        </div>
    )
}