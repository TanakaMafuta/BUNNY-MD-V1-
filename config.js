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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNvTEZsYzZPT0lNQ2RpbXZyVmpScEp6SW4rMUZ0ZlZ4R2VIaDVGRkZHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzhXWEY1OE5KeU5NN0lyc2pZR0Q0cEcrMGxMQm9XdXdpdXBZdWVGaERGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQzR1SnFia3hOMUltVi9TOWNudW1EVUc1QkZLY2FmNy9aQ1NSSTlwYmxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkU3B2Zk53bVBSNndwWUJKR2ZETzRuWUk4QS9RUmpJN0tmZGQrRXdYTEIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPQzd5TjFtd0ZwR1UwanorWCtDUFV6RGgrTUdTZTlrdm90bEhiaEVaVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdoS1N2cENQNnVVMWZ1TFBMZmczMUtiMVVIbFpGdFlPcC9xK3hHcldIeXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVA1MlQ2ZlNxMERsNUJJTUtFQXBmTlEyYmJsWEJqOFN6cDhHUkkxblNsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEQrWm1lOFAxb3oyWW4yQmRsN0dYaDBIYUN4bTNkTk1kRHp5WkNTS1gwST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5jL1QzRlNIam1LRVBBVnRiMkdKWWxyd05BRmovTnFLYy9NNzY1eVp2UXZJc29wQlpQaVovZVZ2cUIzWFFrMmcrSDFEUVpoWWJ2NXZUSytpUGFZMkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJvSkU4MXpsVVhtejJSY05KWkpaOWpYQ3lHNU1RY1RLbkttZHFlWU1ERWlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNOZTBzT1FIRUxPRitzTUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBVGtXcW4xb0UwdnhGcmlLbFZUaHJHU09oL0JOeFpHT0RuKy9NTExUdGhNPSIsImFjY291bnRTaWduYXR1cmUiOiJyc2VlVmxwMG1FZEhGYWI5K2xRSWhxTUMwRjZOZDVyYjZBcSs2L0VlWjllbGRqMW9oTnlZK3YvZFA4TjdGcm02eGk0bXFsVTJOelRmU0dJZi9VMTJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTkFkUHc4TEZtSGRBL0t6OEczN3k2Sy9pTVprS20xQkRzdTVPcGlRWGpNeVQ3QllkYStIMFF1YzJ1RVFkRWRGWllNK2VnVllnYktlaUZMTTMwS3pBQ3c9PSJ9LCJtZSI6eyJpZCI6IjI2Mzc4NTA2MTkwMDoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDeWJlcmdob3N0IiwibGlkIjoiMTkwMDA1NzQ2MDk0MjA3OjE0QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODUwNjE5MDA6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUU1RnFwOWFCTkw4UmE0aXBWVTRheGtqb2Z3VGNXUmpnNS92ekN5MDdZVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMTIxNDc0LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkNFIn0="
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
