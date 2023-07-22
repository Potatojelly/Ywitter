import React, { memo, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import NewTweetForm from '../NewTweetForm/NewTweetForm';
import { useAuth } from '../../context/AuthContext';

const Tweets = memo(({tweetService, username, addable}) => {
    const navigate = useNavigate();
    const [tweets, setTweets] = useState([]);
    const [error, setError] = useState('');
    const {user} = useAuth();

    useEffect(()=>{
        tweetService
            .getTweets()
            .then((tweets) => setTweets([...tweets]))
            .catch((error) => onError(error));
    }, [tweetService, user]);

    const onCreated = (tweet) => {
        setTweets((tweets) => [tweet, ...tweets]);
    };

    const onDelete = (tweetId) => {
        tweetService
            .deleteTweet(tweetId)
            .then(() => {
                setTweets((tweet) => tweets.filter((tweet) => tweet.id !== tweetId))
            })
            .catch((error) => onError(error));
    }

    const onUpdate = (tweetId, text) => {
        tweetService
            .updateTweet(tweetId, text)
            .then((updated) => {
                setTweets((tweets)=> tweets.map((item) => item.id === tweetId ? updated : item));
            })
            .catch((error) => onError(error));
    }

    const onUsernameClick = (tweet) => navigate(`/${tweet.username}`);

    const onError = (error) => {
        setError(error.toString());
        setTimeout(()=> {
            setError("");
        },3000);
    };

    return (
        <>
            {addable && (
                <NewTweetForm
                    tweetService={tweetService}
                    onError={onError}
                    onCreated={onCreated}    
                />
            )}
        </>
    )
})

export default Tweets
