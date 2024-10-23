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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_36_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhPNkZJL3ZBNFVyTC84R2xwZ3dVTWtSZHNwME95Vy9weENiRjNndzFFS0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJxTHpyZ05HVEMyeVhFem54SG9NbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzgwMmJjZTItZDY0YS00NGU0LTllOGYtNDEzM2NjN2Q2MzVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDIwOSxcbiAgICAgIDIyNCxcbiAgICAgIDM5LFxuICAgICAgMjAxLFxuICAgICAgMjQ5LFxuICAgICAgMjAzLFxuICAgICAgMTk4LFxuICAgICAgMjU1LFxuICAgICAgMjQxLFxuICAgICAgMjE1LFxuICAgICAgNzIsXG4gICAgICA2MSxcbiAgICAgIDIwNSxcbiAgICAgIDIxOCxcbiAgICAgIDUzLFxuICAgICAgMjAxLFxuICAgICAgNDYsXG4gICAgICA0MyxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAyNDIsXG4gICAgICAxNjgsXG4gICAgICA3NSxcbiAgICAgIDMzLFxuICAgICAgMTU3LFxuICAgICAgMTM5LFxuICAgICAgMjQ1LFxuICAgICAgOTcsXG4gICAgICA4OSxcbiAgICAgIDIwNCxcbiAgICAgIDk3LFxuICAgICAgMjA0LFxuICAgICAgMTI1LFxuICAgICAgMjE4LFxuICAgICAgOTQsXG4gICAgICAyMDEsXG4gICAgICAxMjQsXG4gICAgICA3NSxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMTlFTVk3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTY2NTU2ODU1OTQ5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjI5MDUzNTQ2MjkxOTk6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBsK05nRUVOcTE0TGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJndlN0UDJabjBibzhpeWJPbkF5Q3RJTnZGSjd1Nld4dU0zWms0RjVxeDJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImx1VXNSTi9YNUdPY0xaR0o4dmNveUZTNEgwbnhQWFNodmtBUHVyY1ZvSWN2c3VlcHZkbG12QjZIeWduejM3ajBBTXVxOGJYRWlQQlFiOWtSazZEWkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRXcTV0Q3ZlY1g5REhaVkZyZnltYmlmN3ZNSUZVT1hxUmw1dTFpb2ZkNzd3OGMxemo4aHJmK2VnVHdGQzNFcWtweFpQNlV1N2tHWFRQSlJQeXdSbGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk2NjU1Njg1NTk0OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MzI5ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNOUJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU05Qi5qc29uIjogIntcImtleURhdGFcIjpcIm9xVzhGU2t2NVF5WDJMc0ZCbVJNMnltUEp1L01lRVNSWU9PRVJlRlQ4TjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MDI3MDI1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NjA4MDc3MTA5XCJ9Igp9"  // PUT your SESSION_ID 


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
