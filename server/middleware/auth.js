import jwt from "jsonwebtoken";
import * as userRepository from "../data/auth.js";

const AUTH_ERROR = {message: "Authentication Error"};

export const isAuth = async (req,res,next) => {
    const authHeader = req.get("Authorization");
    if(!(authHeader && authHeader.startsWith("Bearer"))) {
        console.log("error1");
        return res.status(401).json(AUTH_ERROR)
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(
        token,
        "vS58OV*ETpb81Ch#9#f6S9!I1*jh*Yo3",
        async(error, decoded) => {
            if(error) {
                console.log("error2");
                return res.status(401).json(AUTH_ERROR);
            }
            const user = await userRepository.findById(decoded.id);
            if(!user) {
                console.log("error3");
                return res.status(401).json(AUTH_ERROR);
            }
            req.userId = user.id;
            req.token = token;
            next();
        })
}