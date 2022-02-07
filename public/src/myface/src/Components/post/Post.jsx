import React from 'react'

export function Post( {posts} ) {
    return (
        <div>
            <h1>{posts.message}</h1>
            <img src={posts.imageUrl} />
            <p>posted by {posts.postedBy.name} at {posts.createdAt}</p>
        </div>
    )
}