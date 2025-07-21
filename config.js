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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0V6eGVpc3VBdlJnYU9rQmJuVjJhUTZVNlhsamJldERtaklneGpwck8zbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUszdnFFV1lYVUFNUXZwczE3T3JqdFI3UVFWeW5jbExEY3p2NEVYeGt6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRHYwM1JGVkxxQUdIU0gxS1VWbThwZnRXazBTdHBPZXRxYUF2UmQ0cmxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q1B1VC9pdTFoNWdmNXQ4Nzg4T0VWcFpWKzUrVVRETWxsOWp5KzNoWTNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktEUkYwK1lzUDhNNWdXN0pEMXA1dzkvOWhtYnJXdWhLallCRjVIQy9MMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpYSmtQUG9CRmtrZmI3L213aXlQMnQwb2FkN3lqeDVKRmtzSTNTQW8vam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NQVE12T3pTY29nK2dsM242NTdiTko1VDEvL0Y1eklLQTB2aE4ydm5FVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2FhRTVtbWkwMUxLY3hqTEkySzQxeGJXeUlybHAzd3U4NWUwb254cSsxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhhYjJlcUZVZXg5bnF2UVNFV2RiekpnR3hQT25nYi9wRnZaTEVrZnZvQmpGRTI3VkVSYTkyV3dCbnlNbVQya3plYUNPdjMvaUtBV04wbUJjYVFGOGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Im01YW5VVHVsbytERkEybXF3U1IxenBNS3lja3dDVVZjekNZUkszaFpjQVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lMHNPUUhFS3FYK3NNR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFUa1dxbjFvRTB2eEZyaUtsVlRockdTT2gvQk54WkdPRG4rL01MTFR0aE09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9iaUU1U1BrTTBCSHFxeXJwbGVNWFg2RGl3aXYva1hCa01YMjIvWUtnaXRDQTNoZURhVDBrWFY1dXhJSGtTaEVLT1dieFM2d0d5MDFxU0J1MzZ2S0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3dXhSTHVxcFN3cnlyNGxoa3ErMW1CSGVXYmU1c05HY1FRSDh5ZHVjY3lMR0hoZUh2WTdJMDBhYU9Kc2dOamlPeS96YW1CVHBRc0d0T1A1L09tMjlpZz09In0sIm1lIjp7ImlkIjoiMjYzNzg1MDYxOTAwOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN5YmVyZ2hvc3QiLCJsaWQiOiIxOTAwMDU3NDYwOTQyMDc6MTVAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NTA2MTkwMDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRTVGcXA5YUJOTDhSYTRpcFZVNGF4a2pvZndUY1dSamc1L3Z6Q3kwN1lUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTMxMjM3NjcsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCQ0UifQ=="
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
