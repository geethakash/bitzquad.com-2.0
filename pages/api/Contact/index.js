/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import Contact from "../../../constants/schemas/Contact";
import Transmit from "../../../constants/Transmit";

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
    const resp1 = await Contact.create(req.body.data);
    return res.status(200).json(new Transmit(resp1));
  } catch (e) {
    return res.status(200).json(new Transmit({ error: e }, 500, "Error"));
  }
}
