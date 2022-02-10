import React from 'react'
import { Link } from 'react-router-dom'
import './User.scss';

export function User( {user} ) {
    return (
        <div>
            <Link clasName='link' to={`/users/${user.id}`}><p>{user.name}</p></Link>
            <img className='user-profile-image' src={user.profileImageUrl} />
            <p>{user.username} {user.email}</p>
        </div>
    )
}