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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVyNGdjR3BCQ0lRdXpLaUYvdzhpUUVqTC9jY3hoUE9Vb04rVm5OV0RsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm9BaWNpZ1gxZmJtMGFzQXJqN3NqeU9DUzFoR1hBaXpwMnNOZXR5bkR4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS3Y1bGVoVkJpaEF6c0xXNm1USytQTnk2Tm5nRFcxSm81UlZXQ0F5czJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZFVTTXVTZEoxZlFUSEhKTkFnSlFiclgyNW9ja3ZmcU51eHJNd1NPZzFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHZ01TZzFraEllcGVWWlc1M0ZpMkVIS2JvUnp0VUJjTXVuczhtcFh4bmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRISzdXL1duZnFWV2VVTVpmcmdKOG1RUmQ0V1Rkam1sWFh4dnB4ZWpOMVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBrOVJPQUxJMVk3SGh2TUwxQUtPaGkzQ2UyY2lhaFJ0VlpuTVFxK3ZIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2t2b3VwTm9GMnVNRmdrbThZYm00SkU1N1hZUFJUV3BQNUNxWGxkYjJYcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRNTVE3Szh4M1pIRFJ6a09mZm9aeHRSNlRxTEc3ZFNSR3M5U3MzK0NRVUhGc1R0bDhWSHl3Ri9QblEwTWRORFhpOUovZ3RSZWUzcGJqTDBzRjZVbkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoidW54bGVSNC8xUEVkMEpZK2xVSlB6M3hWUWY5ZDlBVExEKzhvWjF6VGlmRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOENwbV9zN2hUNEN6N3ZpazBSMUg3dyIsInBob25lSWQiOiJlYmVlOTE2Zi1iYTMwLTQ1ZjUtODUzNC0wNzIyN2ZkNGRlYjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWRKTVNMU0VGRGd0R3VRaDM4di9iN1poZEJvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im81MFBsOG9lUDJ4MDJsL0ZKWnNKa3VUVzBRbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzR0cxUjg0RiIsIm1lIjp7ImlkIjoiMjYzNzc0MjM3OTg4OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01QVGt2VUVFSnZnczhBR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikg4S1FQZnRKMTZpM1ZKRVpMZkJJeTJpVEJIQ0NnSUh1WmFnY0hmRWpsbEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklKTFJjMXRCd0pEUFN6S0xFQlhBMUh5LzJiZlVZeGJMTTJYTjVYQm0xcThueWdrbXIyOExCemRrU0c5Ri9QbEZJVGZnSHNmWkU0QUdQWG1zNzIvQ0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxT2FuUUxlb3BNSGVOeUpyOFRIQ0ljUVdhaGQvYlRNaUVhSUtVYktwWkU1OEFXaUYzaFRja1hVNmVlNGUrUjVaVVEvM1FEbHdBLzZ3T0luTTBMSkhCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3NDIzNzk4ODo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIvQ2tEMzdTZGVvdDFTUkdTM3dTTXRva3dSd2dvQ0I3bVdvSEIzeEk1WlMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU2NzgzNzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXZIIn0="
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
