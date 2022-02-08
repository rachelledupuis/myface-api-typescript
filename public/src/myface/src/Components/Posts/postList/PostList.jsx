import React from "react";
import { Post } from "../post/Post";

export function PostList( {postlist} ) {  
    return (
        <ol>
            {postlist.map((post, index) => (
            <li key={index}>
                <Post post={post}/>
            </li>
            ))}
        </ol>
    )
}