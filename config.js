//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bunnytech000@gmail.com@gmail.com";
global.location = "Harare, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Uganda";
global.github = process.env.GITHUB || "https://github.com/bunny00-bot/BUNNY-MD-V1-.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vb5HhRAFi8xggoraw43G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vb5HhRAFi8xggoraw43G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/4cm6kb.jpg";
global.devs = "https://t.me/bunnytech00";
global.sudo = process.env.SUDO || "263771528985";
global.owner = process.env.OWNER_NUMBER || "263774237988"; //your number here
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/4jhcxt.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💖";
global.save_status_from = process.env.SAVE_STATUS_FROM || "263771538985";
global.read_status_from = process.env.READ_STATUS_FROM || "263771528985";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://bunny-md-v1-bszb.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID || //replace the code below with your sesion data
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5ibFlRQTYvdExMd2NwdmZRMlFGaGlnazhyYUZEMVhINHpzblFkNVJXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWlVR2Q1VTRSSnhtZWZwU2kzamJCWHZtQWVRM3ZYN3NqOG1OVWplemF5bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TnJDc2NRWHkrbmpKTllLSmJ3MWdaTHd1by9oY2JQRFRvV0ZyQlFqdmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUTM1TTM4cFhob0ZIVFhJMWpsNUc1U1puaFovU2pid0g4ZHNyVzVqVHpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPbmJzSDJvUGpHL2E4WTZTcEo3UEE5SzE3UzBNY1dNakZuYVBQSjVLRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ5TUJvQ29hNE5MUUhVNnBIQkdpWEtVY2F5R0xZVWZGc0QxQnNPajVLSFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tEdlhEQTJjWE1iTUtTeWRvRkxXRmVWejBEYVduUWI3SjlkMCs3b2VXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZG9rZlkrRmlSVExsdWcvUkhPOVErdVlnMW5kYnUxaGY5QVk5bEhlSjNnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFNWQvS3FCMGFqUlFEV3pjM2tBQlkyRk9sQUZvYkd3Y0o4cVloQWpMWEw1OVptekhEK01KR0l5cTF5NjBLZXpDZlUyUjZJenlOdSs4MGpYRUVlRWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJNTWpVbDZnRjlLcTNMYUY3cmEyNUNEcC94bXB6ckZncHNDT3FsRFA1VDhjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NDIzNzk4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MDA5ODU3RjdGRUVBRUQwNkUwRTkwMjE5Q0JFQThGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1NDg3ODQ3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfUzRueGhxbVQ0V0pobkZaOFVic2JRIiwicGhvbmVJZCI6ImM3ODg3ZDFiLWQ5NDgtNDgyZi1iMDE0LWVmYjJhMTc1Njc1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQXJhWmRUV2tDdGYxYzY3QzIrZFgxcnlGZlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzUvVkVFZ09XakxBQlNlVC8rK0Y2SG5pQTBNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRESk5KWFpIIiwibWUiOnsiaWQiOiIyNjM3NzQyMzc5ODg6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUxUa3ZVRUVOT1BxTUFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDhLUVBmdEoxNmkzVkpFWkxmQkl5MmlUQkhDQ2dJSHVaYWdjSGZFamxsST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSm1CZkl2Z1dOeEZ0dXpucEJsd3hUNnFKWVhPazlWZUJqeXA4NGFESWUzcHlva1FiQU16N0k4eTYydFVQRmtyaFo3OEtEbTkxMXowdTVmbzFwQ3hEQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Inc2TldwM241Tm11elRoZUxKZ3FNSytYc1plSHBXSWY0N0FXcCtSWmt3R0REemNBK2REMFhkV3V3aHYzZFpjY3RzWVM3WFozMzBoZmlUL1BrM0pSemlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc0MjM3OTg4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUi9Da0QzN1NkZW90MVNSR1Mzd1NNdG9rd1J3Z29DQjdtV29IQjN4STVaUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTQ4Nzg0MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBdkgifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BUNNY-MD™`",
  author: process.env.PACK_AUTHER || "BUNNY-MD",
  packname: process.env.PACK_NAME || "B U N N Y",
  botname: process.env.BOT_NAME || "BUNNY-MD",
  ownername: process.env.OWNER_NAME || "BUNNY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "B U N N Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
