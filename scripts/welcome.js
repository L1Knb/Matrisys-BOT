const Discord = require("discord.js");
const config = require("../config.json");

module.exports = (client, member) => {
  const channelId = config.boasVindasChannelId;
  //const rulesChannel = config.rulesChannelId;
  //const tagsChannel = config.tagsChannelId;
  //const tagsAddChannel = config.tagsAddChannelId;

  client.on("guildMemberAdd", (member) => {
    console.log(member);
    
    
  const embed = new Discord.MessageEmbed()
    .setColor('#483D8B')
    .setThumbnail(member.user.avatarURL())
    .setDescription(`Seja bem-vindo a Matrisys Fundation`)
    //.setImage("https://i.imgur.com/gvf8PAl.png")
    .setTimestamp()
	  .setFooter('Matrisys Foundation Server');

    const channel = member.guild.channels.cache.get(channelId);
    
    channel.send(`<@${member.id}>`, embed);
  });
};

