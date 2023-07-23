let tweets = [
    {
        id: "1",
        text: "Testing",
        createdAt: Date.now().toString(),
        name: "Bob",
        username: "bob",
        url:"",
    },
]

export function getAll() {
    return tweets;
}

export function getAllByUsername(username) {
    return tweets.filter((tweet)=>tweet.username === username)
}

export function getById(id) {
    return tweets.find((tweet)=>tweet.id === id);
}

export function create(text, username, name) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

export function update(id, text) {
    const tweet = tweets.find((tweet)=>tweet.id === id);
    if(tweet) tweet.text = text;
    return tweet;
}

export function remove(id) {
    tweets = tweets.filter((tweet)=>tweet.id !== id);
}