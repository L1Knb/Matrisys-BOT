const config = require("../config.json");

module.exports = (client, msg) => {

  client.on("message", (mensagem) => 
  {
    if(!mensagem.author.bot && mensagem.guild){ 
      if (mensagem.content == `<@${config.botId}>`) 
      {
        mensagem.reply(`q foi porra?`);
      }
      if (mensagem.content == 'bom dia') 
      {
        mensagem.reply(`bom dia`);
      }
      else if (mensagem.content == 'boa tarde') 
      {
        mensagem.reply(`boa tarde`);     
      }
      else if (mensagem.content == 'boa noite') 
      {
        mensagem.reply(`boa noite`);     
      }
      if (mensagem.content == 'Oi')
      {
        if  (mensagem.member.id == config.L1Id)
        {
          mensagem.channel.send(`olá L1 como você esta?`);     
        }
        else 
        {
          mensagem.reply(`Você não é o L1 😡`);
        }
        
      }
      if (mensagem.content == 'bem') 
        {
          if  (mensagem.member.id == config.L1Id) 
          {
            mensagem.channel.send(`que bomm 😘`);
          }
               
        }
  
    }
  });
}