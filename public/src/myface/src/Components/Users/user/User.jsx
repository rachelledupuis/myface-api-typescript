import React from 'react'

export function User( {user} ) {
    return (
        <div>
            <p>{user.name}</p>
            <img src={user.profileImageUrl} />
            <p>{user.username} {user.email}</p>
        </div>
    )
}