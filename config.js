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
global.caption = process.env.CAPTION || global.caption || "-𝐌 𝐔 𝐁 𝐀 𝐒 𝐇 𝐀 𝐑 ♡♥" 


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_38_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGTWQwUUwwVDRHK1ZxVk1GWFBXUlFOSmQ1OXhYUncvWDJLQi9ocXB4OXpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2MzQwMDU3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTVDMDdGMTVBMTMwM0QwMzA4OTBCOTY1RjNENjgwMUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NTk3MTE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBVaEU3dHNlU2F1d0NtcjFoVS10NGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTZmMWY0YTktZDNiZS00YTUxLTk3NGQtYTI5ZDE1ZGU3NGE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMjQ3LFxuICAgICAgNyxcbiAgICAgIDE0MSxcbiAgICAgIDYsXG4gICAgICAxNTQsXG4gICAgICAyMzIsXG4gICAgICAxOTIsXG4gICAgICA1NyxcbiAgICAgIDc0LFxuICAgICAgMTgyLFxuICAgICAgMTg2LFxuICAgICAgMTgwLFxuICAgICAgMjIxLFxuICAgICAgMzcsXG4gICAgICAxMDYsXG4gICAgICAxNjAsXG4gICAgICA4NCxcbiAgICAgIDEwLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDE0LFxuICAgICAgMjIzLFxuICAgICAgNjIsXG4gICAgICAyNTAsXG4gICAgICA5OSxcbiAgICAgIDM1LFxuICAgICAgMTkyLFxuICAgICAgMTc2LFxuICAgICAgMTUsXG4gICAgICAyNDEsXG4gICAgICAxMzUsXG4gICAgICAxNTMsXG4gICAgICA2NixcbiAgICAgIDk5LFxuICAgICAgMTY0LFxuICAgICAgNjksXG4gICAgICAyMTgsXG4gICAgICAxMjIsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SEtBTkxMQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTYzNDAwNTcxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJpZmZpIHJhanB1dFwiLFxuICAgIFwibGlkXCI6IFwiMTEyNDI1NTUwNDk1ODgzOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNTdkpvRUVMYWQzcmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5TE52NStNQzM2V1hsamNGOTlQWmYvS2V3TW10ZjJXZU5wd29WbWVub2trPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9uaHNEN3RLajdrZmYxVmJHUFI5Qkh6US85cnlnQ0hOcDV0RnBubk5qU2dwYStsMUdheEQyZmtJOHZ3ME1ibk5FUGxFanR6cklGZ1M3RXg5cmtDaERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdOUjNlUEZEeDM1S1IxUzYyRFkvRWNRbmhVb0VDRmVCMHAyQlRYQUJ5Nk83RGZLa005T2FGWklJS1ZFYmkwMFhTV3BpR3BPUE5DNmpWeTR0bzQwK0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2MzQwMDU3MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NTk3MTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkgvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKSC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
