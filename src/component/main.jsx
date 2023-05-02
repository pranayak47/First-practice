import { useState, useEffect } from 'react'
import UserCard from './usercard';

<UserCard/>
export default function Main() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users/');
            const data = await response.json();
            setUsers(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <button style={{ margin: "100px" }} onClick={fetchUsers}>Get Users</button>
            <div className="user-cards">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}