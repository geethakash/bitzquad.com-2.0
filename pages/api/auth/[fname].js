/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import User from "../../../constants/schemas/user";
import Transmit from "../../../constants/Transmit";
import queryparser from "../../../middleware/queryparser";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

/*  API Route Handler    */
export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await handlePOST(req, res);
            break;
        default:
            return res.status(200).json(new Transmit({}, 400, "Invalid Request"));
    }
}

/*  Handle HTTP POST Actions    */
async function handlePOST(req, res) {
    await mongodb.Connect();
    try {
        const resp = await User.findOne({ name: req.body.name, email: req.body.email, password: req.body.password });
        //console.log(resp);
        if (resp) {
            res.setHeader(
                "Set-Cookie",
                serialize("auth", jwt.sign({ I: resp._id, N: resp.name, T: resp.role }, process.env.JWT_SECRET), {
                    path: "/",
                    httpOnly: true,
                    sameSite: true,
                    secure: true,
                    maxAge: 4 * 60 * 60 - 60, // 4 hours
                })
            );
        }
        return res.status(200).json(new Transmit(resp));
    } catch (e) {
        return res.status(200).json(new Transmit({ error: e.message }, 500, "Error"));
    }
}
