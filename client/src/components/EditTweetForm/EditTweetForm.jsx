import React, { useState } from 'react';
import styles from './EditTweetForm.module.css';

export default function EditTweetForm({tweet, onUpdate, onClose}) {
    const [text,setText] = useState(tweet.text);

    const onSubmit = async (event) => {
        event.preventDefault();
        onUpdate(tweet.id,text);
        onClose();
    }

    const onChange = (event) => {
        setText(event.target.value);
    }
    return (
        <form className={styles.editTweetForm} onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder='Edit your tweet'
                value = {text}
                required
                autoFocus
                onChange={onChange}
                className={`${styles.formInput} ${styles.tweetInput}`}
            />
            <div className={styles.editTweetFormAction}>
                <button type="submit" className={styles.formBtnUpdate}>
                    Update
                </button>
                <button type="submit" className={styles.formBtnCancel} onClick={onClose}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

