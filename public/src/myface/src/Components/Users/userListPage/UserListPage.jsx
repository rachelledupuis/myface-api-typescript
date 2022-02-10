import React, { useState, useEffect } from "react";
import { UserList } from "../userList/UserList";
import { useParams } from "react-router-dom";

export function UserListPage() {
    let { pageNumber } = useParams();

    const[userList, setUserList] = useState()

    useEffect(
        function() {
            fetch(`http://localhost:3001/users?page=${pageNumber}`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        [pageNumber]
    );

    return (
        userList !== undefined ? <UserList userlist={userList}/> : <p>Loading...</p>
    )
    
}