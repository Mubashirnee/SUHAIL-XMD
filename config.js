const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "-𝐌 𝐔 𝐁 𝐀 𝐒 𝐇 𝐀 𝐑 ♡♥🌸" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923705908155";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_11_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQTlwbjVBd3lvbUdxOEtia1dvWHQ3YW5ydU9EdWQ1Mk15eWpHcURmUklpZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiem41aVRQZ1BRc2lrbVVPWTV2TjJDUVwiLFxuICBcInBob25lSWRcIjogXCI0OWEyZjU4Zi1lMmMzLTQyZGMtYmI1NS01MTZlOGNjZTMzMjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgODksXG4gICAgICAxNDEsXG4gICAgICAxNzEsXG4gICAgICAxMDgsXG4gICAgICA4NixcbiAgICAgIDExMyxcbiAgICAgIDI1NSxcbiAgICAgIDIxNixcbiAgICAgIDEyOCxcbiAgICAgIDU2LFxuICAgICAgMTg5LFxuICAgICAgNjUsXG4gICAgICAxOTMsXG4gICAgICAxNTIsXG4gICAgICAxMTUsXG4gICAgICAxODksXG4gICAgICAyMzcsXG4gICAgICAxODIsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICA3MixcbiAgICAgIDE5OSxcbiAgICAgIDE5LFxuICAgICAgMjksXG4gICAgICAyMjYsXG4gICAgICAxMDgsXG4gICAgICA1NixcbiAgICAgIDEwNyxcbiAgICAgIDI1MSxcbiAgICAgIDE4LFxuICAgICAgNzEsXG4gICAgICAxMjAsXG4gICAgICAyMCxcbiAgICAgIDIyNyxcbiAgICAgIDIwMixcbiAgICAgIDg2LFxuICAgICAgNTgsXG4gICAgICAxNTQsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSEo3Q1NQTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNzA1OTA4MTU1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oiGTVVCQVNISVIgUkFKUFVU4oiGXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuICAgICAgICAgX0tJTEwzUl9cIixcbiAgICBcImxpZFwiOiBcIjI1OTIyMzI1NDUyODE1MToyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdVN5NWNGRUphODNiZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJjdU5aaDF3cTc2Qm54aWlUYTl6VS9pS2FGUURyaTlkODhMQkxuRTQ1RUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGNjeVMrMUREcVN2cWI4aXNZaG1IZU1FYXc4MzhkaGZNZWY1SlhFUEJYK1FWSGJ3MUxqMVpBWVpJNmQwME9XM3JucjNNdGdXaHBQaTZ6T3BCZ29lQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia210WTF3NlJUeUkxaS8rMHpJdlFHQXJ3SlYvZGk3alVVR0dUVGFIRDRRU2loMlRCelc1QVhCS3pMZzNEU25KbWxvRnNkTDFFeUR3MUNHN3p1TDNmaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNzA1OTA4MTU1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NTg0NjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1FjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOcmlyUGhSTWY0T1dudjJkSW1WbktwT1BkMGt6VUo4NWluWTdFTTl5a0FNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzOTE2NDI5NTIsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "||•MUBASHIR RAJPUT•||🖤🥀" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "||•MUBASHIR RAJPUT•||🖤🥀",
  packname: process.env.PACK_NAME || "||•MUBASHIR RAJPUT•||🖤🥀",
  botname : process.env.BOT_NAME  || "||•MUBASHIR RAJPUT•||🖤🥀",
  ownername:process.env.OWNER_NAME|| "||•MUBASHIR RAJPUT•||🖤🥀",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "- 𒁍 𝚸4𝐆𝚫𝐋‣❤️🔥"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
