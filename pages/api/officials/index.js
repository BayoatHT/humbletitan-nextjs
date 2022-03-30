import axios from "axios";
import nc from "next-connect";

const handler = nc();
handler.get(async (req, res) => {
  const { data } = await axios.get(
    `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${req.query.address}`
  );
  res.send(data);
});

export default handler;
