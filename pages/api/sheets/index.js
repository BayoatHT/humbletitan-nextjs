import { google } from "googleapis";
import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "spreadSheet.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1ZNcwc9U6dYNzVOQmheECnnZDtH6zxdwbkT9Ns8iOX9k";
  const range = "Copy of VIP 2022 Planned Coverage!A11:E150";
  const ranges = [
    "Copy of VIP 2022 Planned Coverage!A10:E150",
    "Copy of VIP 2022 Planned Coverage!A11:E150",
    "Copy of VIP 2022 Planned Coverage!A10:E150",
    "Copy of VIP 2022 Planned Coverage!A10:E150",
    "Copy of VIP 2022 Planned Coverage!E10:E150",
  ];

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range,
  });
  res.send(getRows.data);
});

export default handler;
