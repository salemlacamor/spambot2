const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505673604348903440")
setInterval(function() {
channel.send(`زكريا خرا زكريا خرا زكريا خرا زكريا خرا زكريا خرا `);
}, 25)
})

client.login(process.env.BOT_TOKEN);