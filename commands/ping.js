const Discord = require('discord.js');
const config = ("../config.json");

module.exports = async (client,msg) =>{
  const message = await msg.channel.send(`🏓 Pinging....`);

        const x = Math.floor(message.createdTimestamp);
        const y = Math.floor(msg.createdTimestamp);      
        console.log(x,y);
        message.edit(`🏓 Pong!  📡 Ping: ${Math.floor(x-y)}ms`);



}
