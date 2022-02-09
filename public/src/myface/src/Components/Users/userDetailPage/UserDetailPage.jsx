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

    let userDetails;

    if (user !== undefined) {
        userDetails = 
            <div>
                <User user={user}/>
                <h2>{user.name}'s Posts</h2>
                <PostList postlist={user.posts}/>
                <h2>{user.name}'s Likes</h2>
                <PostList postlist={user.likes}/>
                <h2>{user.name}'s Dislikes</h2>
                <PostList postlist={user.dislikes}/>
            </div>
    } else {
        userDetails = <p>Loading user details...</p>
    }

    return (
        <div>{userDetails}</div>
    )
    
}