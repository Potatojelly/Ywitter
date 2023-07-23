import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res, next) {
    const username = req.query.username;
    const data = username 
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll();
    res.status(200).json(data);  
}

export function getTweet(req, res, next) {
    const id = req.params.id;
    const data = tweetRepository.getById(id);
    if(data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not found`});
    }
}

export function createTweet(req, res, next) {
    const {text, username, name} = req.body;
    const tweet = tweetRepository.create(text, username, name);
    res.status(201).json(tweet);
}

export function updateTweet(req, res, next) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweetRepository.update(id, text);
    if(tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not found`});
    }
}

export function deleteTweet(req, res, next) {
    const id = req.params.id;
    tweetRepository.remove(id);
    res.sendStatus(204);
}