const Discord     = require("discord.js");
const config      = require("../config.json");

module.exports    = (client, member) => {
  const channelId = config.boasVindasChannelId;

  client.on("guildMemberAdd", (member) => {
    console.log(member);
    
    
  const embed = new Discord.MessageEmbed()
    .setColor('#1A1A1A')
    .setThumbnail(member.user.avatarURL())
    .setDescription(`Seja bem-vindo a Matrisys Fundation`)
    .setImage("https://cdn.discordapp.com/attachments/872245099663360010/872620044314619904/ab.png")
    .setTimestamp()
	  .setFooter('Matrisys Foundation Server');

    const channel = member.guild.channels.cache.get(channelId);
    
    channel.send(`<@${member.id}>`, embed);
  });
};

