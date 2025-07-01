export default async function handler(req, res) {
  const FEED_URL = "https://prf.rewardgateway.com/Feed/Integration/9e8f4544-5edb-43fd-a7dc-5f96a63eb7e5/sndebma0";
  const r = await fetch(FEED_URL);
  if (!r.ok) {
    res.status(500).send("Failed to fetch feed");
    return;
  }
  const xml = await r.text();
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send(xml);
}