/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import Contact from "../../../constants/schemas/contact";
import Transmit from "../../../constants/Transmit";
import request from "../../../middleware/request";
import queryparser from "../../../middleware/queryparser";

import { BetaAnalyticsDataClient } from "@google-analytics/data";

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
    try {
        const analyticsDataClient = new BetaAnalyticsDataClient({
            credentials: JSON.parse(process.env.GOOGLE_CRED),
        });
        const [response] = await analyticsDataClient.runReport({
            property: `properties/329441108`,
            dimensions: [{ name: "pagePath" }],
            metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
            dateRanges: [{ startDate: "3000daysAgo", endDate: "today" }],
            dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "CONTAINS", value: req.query.url } } },
            metricAggregations: ["TOTAL"],
        });

        return res.status(200).json(
            new Transmit({
                data: { users: response.rows[0].metricValues[0].value, views: response.rows[0].metricValues[1].value },
            })
        );
    } catch (e) {
        return res.status(200).json(new Transmit({ error: e.message }, 500, "Error"));
    }
}
