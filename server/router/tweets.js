import express from "express";
import "express-async-errors";

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
const router = express.Router();

router.get("/", (req, res, next) => {
    const username = req.query.username;
    const data = username 
        ? tweets.filter((tweet)=>tweet.username === username)
        : tweets;
    res.status(200).json(data);  
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    const data = tweets.find((tweet)=>tweet.id === id);
    if(data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not found`});
    }
});

router.post("/",(req, res, next) => {
    const {text, username, name} = req.body;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
});

router.put("/:id",(req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet)=>tweet.id === id);
    if(tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) is not found`});
    }
});

router.delete("/:id",(req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet)=>tweet.id !== id);
    res.sendStatus(204);
});

export default router;
