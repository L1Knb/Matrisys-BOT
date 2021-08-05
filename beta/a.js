const config = require("../config.json");

const Discord = require('discord.js');
module.exports = (client, msg) => {
  const embed = new Discord.MessageEmbed()
	.setColor('#A1A1A1')
	.setTitle('REGRAS:')
	.setAuthor(`Matrisys Fundation`,)
	.setThumbnail(`https://i.imgur.com/nUguxPZ.png`)
	.addFields
  (
    {name: '1º Não poste material duvidoso', value: 'Material duvidoso ou pornográfico, sendo imagens, links ou qualquer outro meio não serão tolerados, sendo passível de punição imediata.\n'},
    {name: '2º Não faça spam', value: 'Evite postar conteúdos repetitivos ou sem sentido, isso inclui imagens\n'},
    {name: '3º Utilize os canais devidamente', value: 'Utilize os canais corretos para postar conteúdo e respeite o conteúdo do canal\n'},
    {name: '4º Respeito entre membros', value: '\nQualquer tipo de desrespeito sem consentimento será passível de punição'}
	)
	.setTimestamp()
	.setFooter('Matrisys Foundation Server');

  msg.reply(embed)
  
}; 
