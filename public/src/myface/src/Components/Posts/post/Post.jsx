import React from 'react'

export function Post( {post} ) {
    return (
        <div>
            <img src={post.imageUrl} />
            <p>posted {post.createdAt}</p>
            <p>{post.message}</p>
        </div>
    )
}