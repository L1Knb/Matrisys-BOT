const config        = require("../config.json");
const commands      = require("./CommandsReader")(config.prefix);
const unknowCommand = require("./unknowCommand");
const permissions   = config.permissions;

module.exports = async (client, msg) => {
  client.on("message", (msg) => {

  if(!msg.author.bot && msg.guild)
  {
        if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]){
            if(verificarPermissao(msg.member,args[0]))
                commands[args[0]](client,msg, args);
            else msg.reply("você não tem permissão para executar esse comando!");
        }
        else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);
    
    if (msg.content == 'Oi')
    {
      if (msg.member.id == config.L1Id)
      {
        msg.channel.send(`olá L1 como você esta?`);     
      }
      else 
      {
        msg.reply(`Você não é o L1 😡`);
      }
        
    }
      if (msg.content == 'bem') 
      {
        if  (msg.member.id == config.L1Id) 
        {
          msg.channel.send(`que bomm 😘`);
        }
               
      }

    if (msg.content == 'bom dia') {
      msg.reply(`Bom dia`);
    }
    else if (msg.content == 'Bom dia') {
      msg.reply(`Bom dia`);
    }
    else if (msg.content == 'BOM DIA') {
      msg.reply(`BOM DIA VAGABUNDO`);
    }
    else if (msg.content == 'boa tarde') {
      msg.reply(`Boa tarde`);
    }
    else if (msg.content == 'Boa tarde') {
      msg.reply(`Boa tarde`);
    }
    else if (msg.content == 'BOA TARDE') {
      msg.reply(`BOA TARDE PORRA`);
    }
    else if (msg.content == 'boa noite') {
      msg.reply(`Boa noite`);
    }
    else if (msg.content == 'Boa noite') {
      msg.reply(`Boa noite`);
    }
    else if (msg.content == 'BOA NOITE') {
      msg.reply(`BOA NOITE CARALHO`);
    }
    else if (msg.content == 'oi') {
      msg.reply(`oiiieeee :3 (oi cringe)`);
    }
    else if (msg.content == 'é sobre isso') {
      msg.reply(`LACROU MANXXX???`);
    }
    else if (msg.content == 'F') {
        msg.channel.send(`F`);
    }
    
  }
});



function verificarPermissao(member,command){
    let verification = !permissions[command];
    if(!verification){
        const perms = permissions[command];
        perms.forEach(p =>{
            switch(p.type){
                case "role":
                    if(member.roles.cache.has(p.value)) verification = true;
                break;
                case "permission":
                    if(member.permissions.has(p.value)) verification = true;
                break;
                case "id":
                    if(member.id.has(p.value)) verification = true;
                break;
            }
        });
    }
    return verification;
}
}