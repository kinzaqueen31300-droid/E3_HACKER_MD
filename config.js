const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZIVXNUMS9JdGs5SHdKdVhvUDAyVFoyZVNxeFVDbFJYM1pkVjVmdWMybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3FRV1JQNG9JYUk5TDNVZWxFT0xhNVJZaGtqV0RrME44ZEI0NzM1dGpndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTkJra05EaGJWejk5S3Awc0RFaFlsQlNOb01YQUtqRzRITE9BaElCRkVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNVpLTFFtdEQyTG0zL21ES2FINzc4aDBicEw4THF5ZmRDUmdjdUZnc0NRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFRm5Va0xEQXZHbmFPYnY1NXVRVjFPcko4S1JZa0J6NGNpY2xrNDhaSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUyQlIyM3NEeklvQXZ0bU1DWFNVbkR1WU9La3B3UzRWWU1VMjVCazVjQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5BNjhhODNtbmVmMXRsZjNoMDhpL1ptNnEzOUtaN2ZYSVlocnRaanNrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRC90TGQvZnN0TUh5WG1neVBTd0JtMUFFR2JYamRTTXVieW1xNHFwb0RSTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ4cm1QMmRZcmk0YmUzYlFiNXloRUpLNVBRdUxEUmNvZ0RNdzhSajJwczJ6U0swUFh3Y2dhbzNDUnk2bTFwSGdmRlliRStKelhpd0FqMXNZa2ZVZ0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiIzSm1sMDF6aVBmaXltNXYrK0dyaUJ5MXBJUHczd0Y0V0s4SjdKMFRYQU5ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5NDU0MTE5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMDFGOUY1RDQ0NDQxRUY0NjRBQTBEQTQwMzhGRkRDNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDYwNTc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIS0o5NUVWQyIsIm1lIjp7ImlkIjoiOTIzMTk0NTQxMTk0OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkLMtkHMtkTMtk7MtkHMtlPMtkXMtkXMtkLMtiDJosaW4Y+S8JCQmyIsImxpZCI6IjIwOTcxNTI1MDM2NDQ2MzoxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082WjUwZ1FtN2V0eFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9VSXB3aW8rY01FNFkyK2hUaGsrMTI2eUFoZG92TUtRb3VnZEdGcUhZUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImI2Z0JzV1RpKzhkSWhxYkJjekJxWUE3YzhwWGtsLzRuMWVCbSszOElVVmtCTjc4L0NJNUo0cVphSThaeUlseGV0UzJ3WncvU0NvcHlnU29vSGJ5bEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoSFFQY29FL3ZhSHhCUk9IR3RmUy9zWGhNN3d0S041Qjd2dks3eEp6dkwvNjZvTEZad01Pd3Qwc25PY0YyNXcyN1dIL09UUXU3UysxcXk0K040N1FEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5NDU0MTE5NDoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMUNLY0lxUG5EQk9HTnZvVTRaUHRkdXNnSVhhTHpDa0tMb0hSaGFoMkVZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwNjA1NzUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGVYIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🧠,🫀,💗🦧,💦,❤🍇,🍑,💛,💚,💣,💙,💜,🤎,👀,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
