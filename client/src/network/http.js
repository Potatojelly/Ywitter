import axios from "axios";
import axiosRetry from 'axios-retry';

export default class HttpClient {
    constructor(baseURL, authErrorEventBus) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: {"Content-Type": "application/json"},
            withCredentials: true,
        })
        this.authErrorEventBus = authErrorEventBus;
        axiosRetry(this.client, {
            retries: 5,
            retryDelay: (retry) => {
                const delay = Math.pow(2,retry) * 100;
                const jitter = delay * 0.1 * Math.random();
                return delay + jitter;
            },
            retryCondition: (err) => axiosRetry.isNetworkOrIdempotentRequestError(err) || 
            err.response.status === 429,
        });
    }
    
    async fetch(url, options) {
        const  {body, method, headers } = options;
        const req = {
            url,
            method,
            headers: {
                ...headers,
            },
            data: body,
        };

        try {
            const res = await this.client(req);
            return res.data;
        } catch(err) {
            if(err.response) {
                const data = err.response.data;
                const message = data && data.message ? data.message : "Somthing went wrong!";
                throw new Error(message[0].msg);
            }
            throw new Error("connection error");
        }
    }
}