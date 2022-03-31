import axios from "axios";
import nc from "next-connect";
import Cookies from "js-cookie";

const handler = nc();
handler.get(async (req, res) => {
  alert("daf");
  const address = req.query.address;
  console.log("address", address);
  if (address) {
    alert(address);
    const { data } = await axios.get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=59%20Stephens%20Salem%20Rd%20Stephens%2C%20Georgia(GA)%2C%2030667`
    );
    res.send(data);
  }
});

export default handler;
