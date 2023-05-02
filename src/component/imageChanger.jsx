import React, { useEffect, useState, useRef } from 'react';

function ImageChanger() {
    const [imageSrc, setImageSrc] = useState('');
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageSrc) {
            imageRef.current.src = imageSrc;
        }
    }, [imageSrc]);

    const handleChangeImage = () => {
        // Generate a random image URL
        const randomImageUrl = `https://source.unsplash.com/random/400x300?timestamp=${Date.now()}`;
        setImageSrc(randomImageUrl);
    };
    return (
        <div>
            <img ref={imageRef} alt="Preview" style={{ width: '400px', height: '300px' }} />
            <br />
            <button onClick={handleChangeImage}>Change Image</button>
        </div>
    );
}

export default ImageChanger;