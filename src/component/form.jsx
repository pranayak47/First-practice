import "./form.css";
import { useState } from 'react'

export default function NameForm() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        setName('');
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>Hi! My name is: {submittedName ? 'submittedName' : '*****'}!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default NameForm
