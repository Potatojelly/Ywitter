import React from 'react';
import Tweets from '../components/Tweets/Tweets';

export default function AllTweets({tweetService}) {
    return (
        <Tweets tweetService={tweetService} addable={true}/>
    );
}

