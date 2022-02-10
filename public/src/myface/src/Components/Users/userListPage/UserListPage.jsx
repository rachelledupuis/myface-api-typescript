import React, { useState, useEffect } from "react";
import { UserList } from "../userList/UserList";
import { useSearchParams } from "react-router-dom";

export function UserListPage() {
    const[userList, setUserList] = useState()
    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get('page');

    useEffect(
        function() {
            const url = `http://localhost:3001/users?${pageNumber ? `page=${pageNumber}` : ""}&pageSize=10`;
            fetch(url)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        [pageNumber]
    );

    return (
        userList !== undefined ? <UserList userlist={userList}/> : <p>Loading...</p>
    )
    
}