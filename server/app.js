import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import "express-async-errors";
import tweetsRouter from "./router/tweets.js";
import authRouter  from "./router/auth.js";
import {config} from "./config.js"
import {Server} from "socket.io";
import { initSocket } from './connection/socket.js';
import {db} from "./db/database.js";

const app = express();

const corsOption = {
    origin: config.cors.allowedOrigin,
    optionSuccessStatus: 200,
    credentials: true,
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use(morgan("tiny"));
app.use(helmet());

app.use("/tweets",tweetsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

db.getConnection();
console.log(`Server is started.... ${new Date()}`);
const server = app.listen(config.host);
initSocket(server);