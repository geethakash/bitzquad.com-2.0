/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import News from "../../../constants/schemas/News";
import Transmit from "../../../constants/Transmit";
import queryparser from "../../../middleware/queryparser";

/*  API Route Handler    */
export default async function handler(req, res) {
  
  switch (req.method) {
    case "GET":
      await handleGET(req, res);
      break;
    default:
      return res.status(200).json(new Transmit({}, 400, "Invalid Request"));
  }
}

/*  Handle HTTP GET Actions    */
async function handleGET(req, res) {
  await mongodb.Connect();
  try {
    const query = queryparser.Parse(req);
    const resp1 = await News.find(query.search, query.select, query);
    return res.status(200).json(new Transmit(resp1));
  } catch (e) {
    return res.status(200).json(new Transmit({ error: e }, 500, "Error"));
  }
}
