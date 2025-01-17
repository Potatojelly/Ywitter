import React from 'react';
import { useParams } from 'react-router-dom';
import Tweets from '../components/Tweets/Tweets';

export default function MyTweets({tweetService}) {
    const {username} = useParams();
    return (
            <Tweets tweetService={tweetService} username={username} addable={false} />
    );
}

