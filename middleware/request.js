import axios from "axios";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

async function Get(url, config = { headers: {} }) {
    config.headers = setDefaultHeaders(config.headers);
    let res = await axios.get(url, config);
    if (!res) {
    }
    return res;
}
async function Post(url, data, config = { headers: {} }) {
    config.headers = setDefaultHeaders(config.headers);
    let res = await axios.post(url, data, config);
    if (!res) {
    }
    return res;
}
async function Put(url, data, config = { headers: {} }) {
    config.headers = setDefaultHeaders(config.headers);
    let res = await axios.put(url, data, config);
    if (!res) {
    }
    return res;
}
async function Delete(url, config = { headers: {} }) {
    config.headers = setDefaultHeaders(config.headers);
    let res = await axios.delete(url, config);
    if (!res) {
    }
    return res;
}

function setDefaultHeaders(currentHeaders) {
    return currentHeaders;
}

function CheckAndUpdateAuth(req, res) {
    let authToken = req.cookies["auth"];
    if (!authToken) return { result: { success: false, msg: "Token not provided", data: null }, res: res };

    try {
        var decoded = jwt.verify(authToken, process.env.JWT_SECRET);
        return { result: { success: true, msg: "Authenticated", data: decoded }, res: res };
    } catch {
        res = ClearJWTCookie(res);
        return { result: { success: false, msg: "Invalid Token", data: null }, res: res };
    }
}

function ClearJWTCookie(res) {
    res = res.setHeader(
        "Set-Cookie",
        serialize("auth", "", {
            path: "/",
            maxAge: -1, // Delete it
        })
    );
    return res;
}

export default {
    Get,
    Post,
    Put,
    Delete,
    CheckAndUpdateAuth,
    ClearJWTCookie,
};
