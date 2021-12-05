import React, { useState } from "react";
import "../styles/Contact.css";
import { validateEmail } from '../utils/helper';
import {Snackbar, Alert} from "@mui/material/";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInput = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if(inputName === 'name') {
            setName(inputValue);
        }else if (inputName === 'email') {
            setEmail(inputValue);
        }else if(inputName === 'message') {
            setMessage(inputValue);
        }
    }

    const handleBlur = (e) => {
        e.preventDefault();
        const inputName = e.target.name;
        setTimeout(() => {
            if(name === '' && inputName === 'name') {
                setError(true);
                setErrorMessage('Please enter your name');
                return;
            }else if (!validateEmail(email) && inputName === 'email') {
                setError(true);
                setErrorMessage('Invalid email');
                return;
            }else if (message === '' && inputName === 'message') {
                setError(true);
                setErrorMessage('Message field is required.');
                return;
            }
        }, 1000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
    }
    
    const handleErrorClose = (e) => {
        setErrorMessage("");
        setError(false);
    }

    const handleSubmitClose = () => {
        setSubmitted(false);
    }

    return(
        <div className="Contact">
            
            <form>
                <h1>Contact me!</h1>
                <label>Name:</label>
                <input type='text' id='name' name='name' placeholder='Name' value={name} onChange={handleInput} onBlur={handleBlur}></input>
                <label>Email:</label>
                <input type='text' id='email' name='email' placeholder='Email' value={email} onChange={handleInput} onBlur={handleBlur}></input>
                <label>Questions/Comments:</label>
                <textarea id='message' name='message' placeholder='Message' value={message} onChange={handleInput} onBlur={handleBlur}></textarea>
                <button className='button' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert severity="error" onClose={handleErrorClose} sx={{ width: '100%' }}>{errorMessage}</Alert>
            </Snackbar>

            <Snackbar open={submitted} autoHideDuration={6000} onClose={handleSubmitClose}>
                <Alert severity="success" onClose={handleSubmitClose} sx={{width: '100%'}}>Message submitted!</Alert>
            </Snackbar>
        </div>
    );
}