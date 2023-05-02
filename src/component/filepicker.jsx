import { useState, useEffect, useRef } from "react";

export default function UseReff(){
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileSelected = (event) => {
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile);

    };
    return (
        <div style={{ marginTop: '100px' }}>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileSelected}
            />
            <button onClick={handleButtonClick}>Pick the File</button>
        </div>
    );
}