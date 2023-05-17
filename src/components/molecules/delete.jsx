import React, { useState } from "react";
import { RiDeleteBack2Line } from 'react-icons/ri'


function Delete() {
    const [names, setNames] = useState([
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emily"
    ]);

    const handleDelete = (name) => {
        setNames(names.filter((n) => n !== name));
    };

    return (
        <div>
            <h1>Names</h1>
            <ul>
                {names.map((name) => (
                    <li key={name}>
                        {name}{" "}
                        <button onClick={() => handleDelete(name)}>
                            <RiDeleteBack2Line/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Delete;