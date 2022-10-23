/*  Importings    */
import mongodb from "../../../middleware/mongodb";
import Contact from "../../../constants/schemas/contact";
import Transmit from "../../../constants/Transmit";
import request from "../../../middleware/request";
import queryparser from "../../../middleware/queryparser";
import cred from "../../../credentials.json";

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
        const resp = await runReport();
        return res.status(200).json(
            new Transmit({
                data: resp,
                pages: 0,
                page: 0,
                limit: 0,
                total: 0,
            })
        );
    } catch (e) {
        return res.status(200).json(new Transmit({ error: e.message }, 500, "Error"));
    }
}

async function runReport() {
    const analyticsDataClient = new BetaAnalyticsDataClient({
        key: "AIzaSyAHWz79beBgWRZf9MBA4F-7uBMRS-VchHI",
        credentials: cred,
    });
    const [response] = await analyticsDataClient.runReport({
        property: `properties/329441108`,
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
        dateRanges: [{ startDate: "3000daysAgo", endDate: "today" }],
        dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "CONTAINS", value: "/blog/ed-trends-waiting-to-say-hello-in-2023" } } },
        metricAggregations: ["TOTAL"],
    });

    console.log("Report result:");
    response.rows.forEach((row) => {
        console.log(row.dimensionValues[0], row.metricValues[0]);
    });
    return response;
}
