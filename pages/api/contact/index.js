/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import Contact from "../../../constants/schemas/contact";
import Transmit from "../../../constants/Transmit";
import request from "../../../middleware/request";

/*  API Route Handler    */
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            await handleGET(req, res);
            break;
        case "POST":
            await handlePOST(req, res);
            break;
        default:
            return res.status(200).json(new Transmit({}, 400, "Invalid Request"));
    }
}
/*  Handle HTTP GET Actions    */
async function handleGET(req, res) {
    const { res: newRes, result: auth } = request.CheckAndUpdateAuth(req, res);
    if (!auth.success) return newRes.status(401).json(new Transmit({}, 401, "Unauthorized"));
    await mongodb.Connect();
    try {
        const query = queryparser.Parse(req);
        const count = await Contact.countDocuments({ ...query.search, deleted: false });
        const resp = await Contact.find({ ...query.search, deleted: false }, { ...query.select }, query.options);
        return res.status(200).json(
            new Transmit({
                data: resp,
                pages: Math.ceil(count / query.options.limit),
                page: query.options?.page ? query.options?.page : 0,
                limit: query.options?.limit ? query.options?.limit : 500,
                total: count,
            })
        );
    } catch (e) {
        return res.status(200).json(new Transmit({ error: e.message }, 500, "Error"));
    }
}
/*  Handle HTTP POST Actions    */
async function handlePOST(req, res) {
    await mongodb.Connect();
    try {
        const resp1 = await Contact.create(req.body.data);
        return res.status(200).json(new Transmit(resp1));
    } catch (e) {
        return res.status(200).json(new Transmit({ error: e }, 500, "Error"));
    }
}
