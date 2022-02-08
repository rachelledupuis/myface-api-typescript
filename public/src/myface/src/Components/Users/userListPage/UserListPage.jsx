import React, { useState, useEffect } from "react";
import { UserList } from "../userList/UserList";

export function UserListPage() {
    const[userList, setUserList] = useState()

    useEffect(
        function() {
            fetch(`http://localhost:3001/users`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        []
    );

    return (
        userList !== undefined ? <UserList userlist={userList}/> : <p>Loading...</p>
    )
    
}