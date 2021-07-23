const config = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);
const bot = config.botId;

const Discord = require('discord.js');
module.exports = (client, msg) => {
  const avisoEmbed = new Discord.MessageEmbed()
	.setColor('#483D8B')
	.setTitle('Comandos:')
	.setAuthor(`Matrisys Fundation`,)
	.setThumbnail(`https://i.imgur.com/nUguxPZ.png`)
	.addFields
  (
    {name: '*help',  value: 'Use esse comando para ver os comandos disponiveis!'},
    {name: '*ping', value: 'Pingue o bot'}
	)
	.setTimestamp()
	.setFooter('Matrisys Foundation Server');

  msg.reply(avisoEmbed)
  msg.channel.send("Tirei suas duvidas?")
}; 

const permissions = config.permissions

function verificarPermissao(member,command)
{
    let verification = !permissions[command]
    if(!verification)
    {
        const perms = permissions[command]
        perms.forEach(p =>
        {
            switch(p.type)
            {
                case "role":
                {
                    if(member.roles.cache.has(p.value))
                    {
                      verification = true
                    }
                    
                    break;
                }
                case "permission":
                {
                  if(member.permissions.has(p.value))
                  {
                    verification = true
                  }

                  break;
                  
                }   
                case "id":
                    if(member.id.has(p.value)) verification = true;
                break;
            }
        });
    }
    return verification;
}