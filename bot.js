const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("663762134274146311")
setInterval(function() {
channel.send(`𝑫𝒐 𝒏𝒐𝒕 𝒔𝒑𝒂𝒎 𝒐𝒓 𝒃𝒐𝒕𝒉𝒆𝒓 𝒐𝒕𝒉𝒆𝒓𝒔 𝒖𝒔𝒆𝒓 𝒘𝒊𝒕𝒉 𝑷𝒐𝒌𝒆 𝒂𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔`);
}, 30)
})

client.login(process.env.BOT_TOKEN);