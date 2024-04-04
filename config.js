const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       
// put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Kampala,Uganda."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://moriceug:ykneyPF1867D9903@clustermorice.sqdmjyk.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "254112515468" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-mdV2";
global.gurl  =process.env.GURL  || 
"https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"
;
global.website=process.env.GURL || 
"https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" 
; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || 
"https://telegra.ph/file/54efddccf41281ad7ec51.jpg" 
; // SET LOGO FOR IMAGE 



global.devs = "254112515468" // Do Not Change Else Bot Won't Work After Deploying
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254112515468";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254112515468";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg",
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://session.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk95OHFjdUNHTE9lQVRMYXA4L0ZaK3ZycGNNRy9IRmJxM3VsZWlrVG0xVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm5NcDVkTWdEN0dvbjlSV3kzOFpjSUx1T3BKVytNOWx6V1lHOGRjUXRuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlS1JvWFQrdHkwdE9mTWVTY2ROWEE1Mm9wM2VlU1MxZi9WWkFtaEoyczFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUHlaSVYyTmhaY0pvRXEyUk1TcUxXVkgwWnNqZ0ZROThpcmNVY0h0Mmg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPRFZqd1B0bmJxL2FQYzlZZjMrZlJ6TGpKNTZXK2lza3pwQklxaDR3WE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9wSXd0emU2MW1tVUI0K3VEWEtlaEdPd0IvVnN2anprSk9FV3VpZXRTaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdSKytIcHFPR1NpM1dkeldtaDgrd2JlSFZxcXhtRGltVnFJTit0ZStrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmlWV3BSOUpJVy83b0VYMTZnR0hoMmZEcjgxZ0poNkhYekZ0RTk2Y09UMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNTZWZPVmpSU0dZQUdTWjBVZzlFMCs5ak5oblRPTFVuWW5Kd1V0dndqdjYvaTlvN0U1eGJBN04zZUhxVGtjV2F5OWpQU21DMjRsQlV2bzR6Zlg3SmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiUEcyaHhPd0kxdWFQL2xQUTk2NEFlUXExVnd1RGFyMmdQRTd0bmhrTEdNcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR0cyaXNWSC1UY3l6TVVEeVFfVl9GUSIsInBob25lSWQiOiJiODhmMWVlNi1mMjEwLTQyZjQtOTNjMS03NWIxMjkzZGY5OWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWxTdWQwMUx6QjJEUWZFK0NVaUNhbjdXRC9jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndkN2k2UFlOV011TWFjQWtyQlNaTnlBV0NqWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYWllLNU1KUCIsIm1lIjp7ImlkIjoiMjU0MTEyNTE1NDY4OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC6oeC9nuC5luC4qOC9puC9myDguIXguZFq4LmRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZXh6YklCRU11SnVyQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaemdVMVJZV3VCSnY1NG5LSmxleDlrU0l6cnhwVTllRjcyd1dGNC9XVTE0PSIsImFjY291bnRTaWduYXR1cmUiOiJZNEhZb3d5T2NBNStFNGJuMjJCZnZGeVFPSGtrMk1IYjBIYXBSNUJHZVF5a3pvTTZmbCtKazlPbS8zL0p4a0lwV09UYmNVLzg0ZnhpWnBQYVRtUzFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQkg4TU9KeTVIcy9jQnNSZEpaUlJ5WEEwbU84YTA5c1M3ck9BbE5UamU4K2pzUGdRbUxQMHdsMTBwb2l1VjZyM3FBeVdReFpObXB6c3JRbDN1SHp4Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTI1MTU0Njg6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2M0Rk5VV0ZyZ1NiK2VKeWlaWHNmWkVpTTY4YVZQWGhlOXNGaGVQMWxOZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMjIyNzU0Nn0==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.0.0",
  caption : process.env.CAPTION || "©MORICEDESIGNZ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Fala",
  packname: process.env.PACK_NAME || "🇺🇬",
  botname : process.env.BOT_NAME  || "Fala",
  ownername:process.env.OWNER_NAME|| "It's Fala",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  levelupmessage: process.env.LEVEL_UP_MESSAGE || "false",

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: ( process.env.THEME || "MORICE" ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
