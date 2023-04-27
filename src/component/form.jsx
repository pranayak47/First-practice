
import {useState, Fragment} from 'react'

export default function GuessNumberGame () {
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setGuess(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setAttempts(attempts + 1);

        if (Number(guess) < luckyNumber) {
            setMessage('You guessed a smaller number.');
        } else if (Number(guess) > luckyNumber) {
            setMessage('You guessed a bigger number.');
        } else {
            setMessage(`Congratulations! You guessed the right number in ${attempts} attempts.`);
        }
    };
    return( 
        <div className=''>
            <h1>Guess the Lucky Number From 1 - 100</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input' type="number" value={guess} onChange={handleChange} required />
                <button className='button' type="submit">Guess</button>
            </form>
            <p>{message}</p>
        </div>
        
    );
};

