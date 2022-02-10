import React, { useState, useEffect } from "react";
import { PostList } from "../postList/PostList";
import { useSearchParams } from "react-router-dom";

export function PostListPage() {
    const[postList, setPostList] = useState();
    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get('page');

    useEffect(
        function() {
            const url = `http://localhost:3001/posts?${pageNumber ? `page=${pageNumber}` : "" }&pageSize=10`;
            fetch(url)
                .then(response => response.json())
                .then(postListJson => setPostList(postListJson.results));
        },
        [pageNumber]
    );

    return (
        postList !== undefined ? <PostList postlist={postList}/> : <p>Loading...</p>
    )
    
}