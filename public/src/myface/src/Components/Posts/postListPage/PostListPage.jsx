import React, { useState, useEffect } from "react";
import { PostList } from "../postList/PostList";
import { useSearchParams, Link } from "react-router-dom";

export function PostListPage() {
    const[postList, setPostList] = useState();
    const[next, setNext] = useState();
    const[previous, setPrevious] = useState();
    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get('page');

    useEffect(
        function() {
            const url = `http://localhost:3001/posts?${pageNumber ? `page=${pageNumber}` : "" }&pageSize=10`;
            fetch(url)
                .then(response => response.json())
                .then(postListJson => {
                    setPostList(postListJson.results);
                    setNext(postListJson.next);
                    setPrevious(postListJson.previous);
                    });
        },
        [pageNumber]
    );

    const nextPrevLinks = <div> 
        {
            previous ? <Link to={previous}>Previous</Link> : <></>
        }
        {
            next ? <Link to={next}>Next</Link> : <></>
        }

    </div>

    let postPage;

    if (postList !== undefined) {
        postPage = 
            <>
                {nextPrevLinks}
                <PostList postlist={postList}/>
                {nextPrevLinks}
            </>
    } else {
        postPage = <p>Loading...</p>
    }

    return (
        <main>
            {postPage}
        </main>
    )
    
}