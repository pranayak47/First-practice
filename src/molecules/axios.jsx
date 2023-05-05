import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogImage = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchDogImage();
    }, []);

    const fetchDogImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImageUrl(response.data.message);
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    return (
        <div>
            <img src={imageUrl} alt="Dog" />
        </div>
    );
};

export default DogImage;
