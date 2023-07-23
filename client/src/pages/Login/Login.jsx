import React, { useState } from 'react';
import styles from './Login.module.css'
import Banner from '../../components/Banner/Banner';

export default function Login({onSignUp, onLogin}) {
    const [signup, setSignup] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setURL] = useState("");
    const [text, setText] = useState("");
    const [isAlert, setIsAlert] = useState(false);
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (signup) {
            onSignUp(username, password, name, email, url).catch(setError);
        } else {
            onLogin(username, password).catch(setError);
        }
    }

    const setError = (error) => {
        setText(error.toString());
        setIsAlert(true);
    }

    const onChange = (event) => {
        const {
            target: {name, value, checked}
        } = event;
        switch (name) {
            case "username" :
                return setUsername(value);
            case "password" :
                return setPassword(value);
            case "name" :
                return setName(value);
            case "email" :
                return setEmail(value);
            case "url" :
                return setURL(value);
            case "signup" :
                return setSignup(checked);
            default :
        }
    };

    return (
        <>
            <Banner text={text} isAlert={isAlert}/>
            <form className={styles.authForm}>
                <input 
                    name="username"
                    type="text"
                    placeholder="id"
                    value={username}
                    onChange={onChange}
                    className={styles.formInput}
                    required 
                />
                <input 
                    name="password"
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={onChange}
                    className={styles.formInput}
                />
                {signup && (
                    <input 
                        name="name"
                        type="text" 
                        placeholder='Name'
                        value={name}
                        onChange={onChange}
                        className={styles.formInput}
                    />
                )}
                {signup && (
                    <input
                        name="email" 
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={onChange}
                        className={styles.formInput} 
                    />
                )}
                {signup && (
                <input
                    name='url'
                    type='url'
                    placeholder='Profile Image URL'
                    value={url}
                    onChange={onChange}
                    className='form-input'
                />
                )}
                <div className={styles.fromSignup}>
                    <input
                        name='signup'
                        id='signup'
                        type='checkbox'
                        onChange={onChange}
                        checked={signup}
                    />
                    <label htmlFor='signup'> Create a new account?</label>
                </div>
                <button className={`${styles.formBtn} ${styles.authFormBtn}`} tpye="submit">
                    {signup ? 'Sign Up' : 'Sign In'}
                </button>
            </form>
        </>
    );
}

