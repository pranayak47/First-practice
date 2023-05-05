import React, { useState } from 'react';
import axios from 'axios';

const GenerateOtp = () => {
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setMobile(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Validate mobile number
        if (!/^[6-9]\d{9}$/.test(mobile)) {
            setError('Invalid mobile number');
            return;
        }

        try {
            const response = await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
                mobile: Number(mobile),
            });

            // Check response status and clear input
            if (response.status === 200) {
                setMobile('');
                setError('');
                console.log('OTP sent successfully');
            } else {
                setError('Failed to send OTP');
            }
        } catch (error) {
            setError('Failed to send OTP');
        }
    };

    return (
        <div style={{background:'red',margin:'100px'}}>
            <h2>Generate OTP</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter mobile number" value={mobile} onChange={handleInputChange} />
                <button type="submit" style={{color:'blue'}}>Send OTP</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default GenerateOtp;
