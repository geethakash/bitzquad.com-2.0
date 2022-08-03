/*  Importings    */
// import mongodb from "../../../middleware/mongodb";
// import Newsletter from "../../../constants/schemas/Newsletter";
import Transmit from "../../../constants/Transmit";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

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
  try {
    switch (FName) {
      case "Subscribe":
        const resp1 = await mailchimp.lists.batchListMembers(
          process.env.MAILCHIMP_NEWSLETTR_LIST_ID,
          {
            members: [
              {
                email_address: req.body.data,
                status: "subscribed",
              },
            ],
            update_existing: true,
          }
        );
        return res.status(200).json(new Transmit(resp1));
      case "Unsubscribe":
        const resp2 = await mailchimp.lists.batchListMembers(
          process.env.MAILCHIMP_NEWSLETTR_LIST_ID,
          {
            members: [
              {
                email_address: req.body.data,
                status: "unsubscribed",
              },
            ],
            update_existing: true,
          }
        );
        return res.status(200).json(new Transmit(resp2));
      default:
        return res.status(200).json(new Transmit({}, 400, "Invalid Request"));
    }
  } catch (e) {
    return res.status(200).json(new Transmit({ error: e }, 500, "Error"));
  }
}
