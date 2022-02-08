import React, { useState, useEffect } from "react";
import { User } from "../user/User";
import { PostList } from "../../Posts/postList/PostList";
import { Post } from "../../Posts/post/Post";

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
            <div>{user !== undefined ? <User user={user}/> : <p>Loading...</p>}</div>
        </div>
    )
    
}