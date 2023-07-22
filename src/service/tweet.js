export default class TweetService {
    tweets = [
        {
            id: 1,
            text: "Hello World!",
            createdAt: "2023-07-21T06:46:57.000Z",
            name: "Bob",
            username: "bob",
            url: "",
        }
    ];

    async getTweets(username) {
        return username 
        ? this.tweets.filter((tweet)=> tweet.username === username)
        : this.tweets;
    }

    async postTweet(text) {
        const tweet = {
            id: Date.now(),
            createdAt: new Date(),
            name: 'Yoon',
            username: 'yoon',
            text,
        };
        this.tweets.push(tweet);
        return tweet;
    }

    async deleteTweet(tweetId) {
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    }

    async updateTweet(tweetId, text) {
        const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
        if (!tweet) {
            throw new Error('tweet not found!');
        }
        tweet.text = text;
        return tweet;
    }
}