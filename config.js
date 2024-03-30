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

global.allowJids= process.env.ALLOW_JID || "256707521863" 
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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256707521863";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256707521863";




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


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hjTy9EWE5aL2Q4VW1HQXZrR2VBTUQzZS9lU0tQaWxNTkRJMUpuUlpWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjVpR2QwcWo4NnFZSDVwK3RrTzJXUk14V3QzWVI5TUp1VlZGY3R1U0lFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSUNESmlFelcwREdxYWZMVkNqQk5BMi9uMXhaN05Va2pvTG8rd3ZQS1Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR3N6dUNocmlKajVxaXJMM2JYSHJzQmFselI0NmNZYUFrajYxY2pZNTE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKa0EwVjJhak12SGRGQ0ljdlYzUU5ucEpRL1JGN3pjUm45cDNHOXZlMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PSjkxVmdqMnlLSE9ocWwxcS9MU0VHMjBOYkZNN29QZnluYmhReXRHQVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVDMzFsTGdpMDMzUFp2UEszbE0vbnA0NGZFTHlYdkJ0TWs4bER0MndXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW1QSG5PUVhqQndIR3RJSGxJVC80TGVtM2dsRlFib3pmcjRHT3RXZGp5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QLzN2NUExeVBHNTZKL2RLcHh2QUlFVTNRK0xSRHJCSGRRaFZ2YVgwcTdvL1hwY2l0NDlTSlBwTG51VjNmU0tXVWJxY24rSU5qRUh2akN0WS9CV0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJZNk1zZmxCanVhOU1LbE5lSld6ZDAvNE5hNUxGYjdTbnJrR2xvQjhvbXZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMNFFRbUFDbFJKLWNqbllrSnE3RG5nIiwicGhvbmVJZCI6ImE0ZDRmYTc5LWM4YmUtNDcwZC1hM2U2LTI1Y2U2Mjg2ZDcwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvd3NuTTNOeEYyRWozYWdUWDkvT0xLWHovV1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Yxd2lUeWZuUTlUUWV4djFxNzgyeXlYVkRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBURDEyODVUIiwibWUiOnsiaWQiOiIyNTY3MDc1MjE4NjM6MzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTU9SSUNFIERFU0lHTlogVUcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00vYzdMOERFTWZlbmJBR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNibHRVbFhuMk5PdWEvaGp4SFNNVFBMaFdmUzRhcWo0VEkveVdQdVdBeUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQzSC8waEZ0eHVwNU53SjRnQ3lVZnYyOFgxVFlRV3V0WVpNQ09DSmpZeHlPc0Rtenk4a0hCZElQS1JFUDlBb09IU0k0c0wwSzlCNWlxbzB4UWFYcEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUbVJtWUcvYUtUb0hDakoxL2Jmcmc2bmZaRDJaN2M3WFdRZ1dWM05CSXRCTW01R3U3bUNWS0ZSNUtmRUFqdWRobHJVZ0hHMHN3T0JFL3QyTkNRZ0lDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NjcwNzUyMTg2MzozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRzViVkpWNTlqVHJtdjRZOFIwakV6eTRWbjB1R3FvK0V5UDhsajdsZ01nIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzExNzYzMjgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNzMyJ9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.0.0",
  caption : process.env.CAPTION || "©MORICEDESIGNZ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "MORICEUG",
  packname: process.env.PACK_NAME || "🇺🇬",
  botname : process.env.BOT_NAME  || "MORICEUG🇺🇬",
  ownername:process.env.OWNER_NAME|| "It's MoriceUg",


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
 
