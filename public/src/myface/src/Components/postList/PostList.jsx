import React from "react";
import { Post } from "../post/Post";

export function PostList( {postlist} ) {   
    return (
        <ol>
            {postlist.map((post, index) => (
            <li key={index}>
                <Post posts={post}/>
            </li>
            ))}
        </ol>
    )
}