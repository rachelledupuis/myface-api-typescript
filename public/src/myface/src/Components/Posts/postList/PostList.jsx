import React from "react";
import { Post } from "../post/Post";
import './PostList.scss';

export function PostList( {postlist} ) {  
    return (
        <ol className="post-list">
            {postlist.map((post, index) => (
            <li key={index}>
                <Post post={post}/>
            </li>
            ))}
        </ol>
    )
}