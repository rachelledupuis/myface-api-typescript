import React, { useState, useEffect } from "react";
import { UserList } from "../userList/UserList";
import { useSearchParams, Link } from "react-router-dom";

export function UserListPage() {
    const[userList, setUserList] = useState();
    const[next, setNext] = useState();
    const[previous, setPrevious] = useState();
    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get('page');

    useEffect(
        function() {
            const url = `http://localhost:3001/users?${pageNumber ? `page=${pageNumber}` : ""}&pageSize=10`;
            fetch(url)
                .then(response => response.json())
                .then(userListJson => {
                    setUserList(userListJson.results);
                    setNext(userListJson.next);
                    setPrevious(userListJson.previous);
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

    let userPage;

    if (userPage !== undefined) {
        userPage = 
        <>
           {nextPrevLinks}
           <UserList userlist={userList}/>
           {nextPrevLinks}
        </>
    } else {
        userPage = <p>Loading...</p>
    }

    return (
        <main>
            {userPage}
        </main>
    )
    
}