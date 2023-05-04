import React from "react";
import { useState, useEffect } from 'react'

export default function GetOtp() {
    const [mobile, setMobile] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate mobile number
        const isValidMobile = /^\d{10}$/.test(mobile);
        if (!isValidMobile) {
            setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
            return;
        }

        // Prepare the request body
        const requestBody = {
            mobile: parseInt(mobile),
        };

        // Call the API to generate OTP
        fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok) {
                    // Clear the input and error message on success
                    setMobile('');
                    setErrorMessage('');
                } else {
                    throw new Error('Failed to generate OTP.');
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };
    return (
        <div style={{margin:'100px'}}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={mobile}
                    onChange={handleMobileChange}
                    placeholder="Enter mobile number"
                />
                <button type="submit">Generate OTP</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}
