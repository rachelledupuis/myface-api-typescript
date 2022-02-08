import React from 'react'
import { Link } from 'react-router-dom'

export function User( {user} ) {
    return (
        <div>
            <Link to={`/users/${user.id}`}><p>{user.name}</p></Link>
            <img src={user.profileImageUrl} />
            <p>{user.username} {user.email}</p>
        </div>
    )
}