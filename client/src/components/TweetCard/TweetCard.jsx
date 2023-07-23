import React, { memo, useState } from 'react';
import parseDate from '../../util/date';
import styles from './TweetCard.module.css';
import Avatar from "../Avatar/Avatar";
import EditTweetForm from "../EditTweetForm/EditTweetForm";

const TweetCard = memo(({tweet, owner, onDelete, onUpdate, onUsernameClick}) => {
    const {id, username, name, url, text, createdAt} = tweet;
    const [editng, setEditing] = useState(false);
    const onClose = () => setEditing(false);

    return (
        <li className={styles.tweet}>
            <section className={styles.tweetContainer}>
                <Avatar url={url} name={name}/>
                <div className={styles.tweetBody}>
                    <span className={styles.tweetName}>
                        {name}
                    </span>
                    <span className={styles.tweetUsername} onClick={()=>onUsernameClick(tweet)}>
                        @{username}
                    </span>
                    <span className={styles.tweetDate}> · {parseDate(createdAt)}</span>
                    <p>{text}</p>
                    {editng && (
                        <EditTweetForm tweet={tweet} onUpdate={onUpdate} onClose={onClose}/>
                    )}
                </div>
            </section>
            {owner && (
                <div className={styles.tweetAction}>
                    <button className={styles.tweetActionBtn} onClick={()=>onDelete(id)}>  
                        x
                    </button>
                    <button className={styles.tweetActionBtn} onClick={() => setEditing(true)}>
                        ✎
                    </button>
                </div>
            )}
        </li>
    )
})

export default TweetCard;