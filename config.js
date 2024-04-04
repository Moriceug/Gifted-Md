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

global.allowJids= process.env.ALLOW_JID || "256753002755" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
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



global.devs = "256707521863" // Do Not Change Else Bot Won't Work After Deploying
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256753002755";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256753002755";




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


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNuSGdzRG9zdmZOamlQazdmQURNeEFTQ28xQVNoV0V0RGxSTFRwUUoyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2pScmpNd3dsMWw4NkFUNlgxaVprTmNYL2NkK3pQUGpvUE1jTk5lMHEzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTXFmWVU4NXFSbHNOeGJsSE9Kb0VVMWVDMmdBcUk1NXUrYy9nMGMxdUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJseUIvcWV0R0krTExwRGdieDV1SzhUTzVKMkdNRjVrVmdGWmdFcmJrcmdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQVlQ1M1U0MXZLVmlUZUNhOHl2ZVh1UHAwK0UxMEtpRFVtYTJQWEw3SE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlljM09PRHk2dUhzK21seE03Y1UwRHR3UHlFbUU2WHBLallaNnlZb3h0elE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUR4K0dKSVJXSWhsUHkvWG56UFdyaW53WWt5SjVVT0U5a0JhVUhBTjRFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lXTS9hTmhId0VBTTlVL2IzbHp3K3o2QXo2NEl4SUxSUHZwWUM0Smhsaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQclVTb0ZzWUZXbWUwTFp5TitxTmpHejFXQkFNQ0x6em1KbmMyNFE2WlFWdmw1ZHp1WWkvdmpFckR6UERxazlPVUZER0lCNU50TnFVMDB1cThZbWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJvdEJzOEZrZU9PaGI1bmtBczN3ckpENWQybTRlcG1rdC82VDJNQ1UrS2hJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjWWVLcnpNaVJzeVNxc2hxYjhSbEpnIiwicGhvbmVJZCI6IjQ3YzhlNzcyLTc1YTMtNGNjZi05MjQ4LTJlZDUyYjBmOGUxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSWVRDVGhCRUt6d0tWSC8rRkhCZmVFbW9oTWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJNU1ZvaVBrdGo1TE1oWS8xaXlqRUJ2S2NJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko3TFdOSExEIiwibWUiOnsiaWQiOiIyNTY3NTMwMDI3NTU6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdWdlbWEgV2lsc29uIFBybyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTytDM3FJREVNQ0Z1ckFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQzUxY0tpcmNWUDRSblAzRUx5RkkvamdoY1lJZ2h6dng3aUYwejNreW5FYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK01obkhHZjFyT0t0ajdCVzQrZWJaVlZaSUc2WUR1bElyVnZ0bUJxSE05L1ZmdXYzaW9icldnTHJFKzlJSHllbitnaGh5Y1llVzI2L0xJemNyRzQxQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNWNm5ZUHpHKzNHY1RYK052M2J1alU4WnNxRWM2RFEwa1E0cjdtV2o0RGlWeW5kWWxOM3dYTFNySmp3MjdKZHZGdFJUWVl4aC9EbFpYa25jdG93OGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzUzMDAyNzU1OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXVkWENvcTNGVCtFWno5eEM4aFNQNDRJWEdDSUljNzhlNGhkTTk1TXB4SCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMjIyNzAyMX0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.0.0",
  caption : process.env.CAPTION || "©MORICEDESIGNZ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Wilson",
  packname: process.env.PACK_NAME || "🇺🇬",
  botname : process.env.BOT_NAME  || "Wilson",
  ownername:process.env.OWNER_NAME|| "It's Wilson",


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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
 
