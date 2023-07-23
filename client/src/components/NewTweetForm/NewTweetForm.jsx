import React, { useState } from 'react';
import styles from './NewTweetForm.module.css'

export default function NewTweetForm({tweetService, onError, onCreated}) {
    const [tweet, setTweet] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        tweetService
            .postTweet(tweet)
            .then((created)=>{
                setTweet("");
                onCreated(created);
            })
            .catch((error)=>onError(error))
    }

    const onChange = (event) => {
        setTweet(event.target.value);
    };

    return (
        <form className={styles.tweetForm} onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder='Edit your Tweet'
                value = {tweet}
                required
                autoFocus
                onChange={onChange}
                className={`${styles.formInput} ${styles.tweetInput}`} 
            />
            <button type="submit" className={styles.formBtn}>Post</button>
        </form>
    );
}

