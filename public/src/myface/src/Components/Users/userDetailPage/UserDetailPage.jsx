import React, { useState, useEffect } from "react";
import { User } from "../user/User";
import { PostList } from "../../Posts/postList/PostList";

export function UserDetailPage(props) {

    const[user, setUser] = useState()

    useEffect(
        function() {
            fetch('http://localhost:3001/users/'+props.id)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
        },
        []
    );

    return (
        <div>
            <div>{user !== undefined ? <User user={user}/> : <p>Loading user details...</p>}</div>
            <h2>{user.name}'s Posts</h2>
            <div>{user !== undefined ? <PostList postlist={user.posts}/> : <p>Loading user's posts...</p>}</div>
            <h2>{user.name}'s Likes</h2>
            <div>{user !== undefined ? <PostList postlist={user.likes}/> : <p>Loading user's likes...</p>}</div>
            <h2>{user.name}'s Dislikes</h2>
            <div>{user !== undefined ? <PostList postlist={user.dislikes}/> : <p>Loading user's dislikes...</p>}</div>
        </div>
    )
    
}