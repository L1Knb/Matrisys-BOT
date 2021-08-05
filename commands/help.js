const config = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);
const bot = config.botId;

const Discord = require('discord.js');
module.exports = (client, msg) => {
  const embed = new Discord.MessageEmbed()
	.setColor('#A1A1A1')
	.setTitle('Comandos:')
	.setAuthor(`Matrisys Fundation`,)
	.setThumbnail(`https://i.imgur.com/nUguxPZ.png`)
	.addFields
  (
    {name: '**prefixo**', value: '`*`'},
    {name: '**geral**', value: '`help` `ping` `paulo guedes` `paulo kogos` `ciencia`'},
    {name: 'mods', value: '`say`'}
	)
	.setTimestamp()
	.setFooter('Matrisys Foundation Server');

  msg.reply(embed)
  
}; 

