import React, { useState, useEffect } from "react";
import { User } from "../user/User";
import { PostList } from "../../Posts/postList/PostList";
import { useParams } from "react-router-dom";

export function UserDetailPage() {

    let { userid } = useParams();

    const[user, setUser] = useState()

    useEffect(
        function() {
            fetch(`http://localhost:3001/users/${userid}`)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
        },
        [userid]
    );

    return (
        <div>
            <div>{user !== undefined ? <User user={user}/> : <p>Loading user details...</p>}</div>
            <div>{user !== undefined ? <h2>{user.name}'s Posts</h2> : <p>Loading user details...</p>}</div>
            <div>{user !== undefined ? <PostList postlist={user.posts}/> : <p>Loading user's likes...</p>}</div>
            <div>{user !== undefined ? <h2>{user.name}'s Likes</h2> : <p>Loading user details...</p>}</div>
            <div>{user !== undefined ? <PostList postlist={user.likes}/> : <p>Loading user's likes...</p>}</div>
            <div>{user !== undefined ? <h2>{user.name}'s Dislikes</h2> : <p>Loading user details...</p>}</div>
            <div>{user !== undefined ? <PostList postlist={user.dislikes}/> : <p>Loading user's dislikes...</p>}</div>
        </div>
    )
    
}