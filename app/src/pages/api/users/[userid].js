export default function handler(req, res) {
  console.log("### API Call ###");
  const { query, method } = req

  return res.status(200).json({ userid: `User ${query.userid}` });
}
