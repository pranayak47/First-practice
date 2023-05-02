import React from "react";
import { useState, useEffect } from 'react'

export default function ImageChanger() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setImageUrl(data.message))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <h1>Dog Image!</h1>
            <img src={imageUrl} alt="Random Dog" />
            <p>Whenever page gets udate - magic happen :</p>
        </div>
    );
}