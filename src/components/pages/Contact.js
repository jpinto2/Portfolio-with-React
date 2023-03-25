import React, { useState } from 'react';
import { validateEmail } from './helpers.js';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') setName(inputValue);
        else if (inputType === 'email') setEmail(inputValue);
        else setMessage(inputValue);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setErrorMessage('Error: You must fill out all 3 fields')
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Not a valid email');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <form className='form d-flex flex-column justify-content-center p-2'>
                <input
                    className='form-control my-2'
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                />
                <input
                    className='form-control my-2'
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                />
                <textarea
                    className='form-control my-2'
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='message'
                    placeholder='Message'
                />
                <button type="button" className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )

}

export default Contact;