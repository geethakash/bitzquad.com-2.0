/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import Newsletter from "../../../constants/schemas/Newsletter";
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
  const FName = req.query.FName;
  await mongodb.Connect();
  try {
    switch (FName) {
      case "Subscribe":
        const resp1 = await Newsletter.create({ email: req.body.data });
        return res.status(200).json(new Transmit(resp1));
      case "Unsubscribe":
        const resp2 = await Newsletter.updateOne(
          { email: req.body.data },
          { $set: { subscribed: false } }
        );
        return res.status(200).json(new Transmit(resp2));
      default:
        return res.status(200).json(new Transmit({}, 400, "Invalid Request"));
    }
  } catch (e) {
    return res.status(200).json(new Transmit({ error: e }, 500, "Error"));
  }
}