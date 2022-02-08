import React from "react";
import { User } from "../user/User";

export function UserList( {userlist} ) {  
    return (
        <ol>
            {userlist.map((user, index) => (
            <li key={index}>
                <User user={user}/>
            </li>
            ))}
        </ol>
    )
}