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
        if  (msg.member.id == config.L1Id)
        {
          msg.channel.send(`Salve L1 seu lindo`);     
        }
        else if (msg.member.id == config.jaoId)
        {
            msg.channel.send(`Eae Jao, seu Gostosao`)
        }
        else 
        {
          msg.reply(`Você não é o L1 nem o Jao 😡`);
        }
    }

    if(msg.content != 'BOM DIA')msg.toLowerCase;
    
    if (msg.content == 'bom dia') {
      msg.reply(`Bom dia`);
    }
    

    if (msg.content == 'BOM DIA') {
      msg.reply(`BOM DIA VAGABUNDO`);
    }
    
    if (msg.content == 'boa tarde') {
      msg.reply(`Boa tarde`);
    }
    
    
    if (msg.content == 'BOA TARDE') {
      msg.reply(`BOA TARDE PORRA`);
    }
   
    if (msg.content == 'boa noite') {
      msg.reply(`Boa noite`);
    }
    
    if (msg.content == 'BOA NOITE') {
      msg.reply(`BOA NOITE CARALHO`);
    }

    else if (msg.content == 'oi') {
      msg.reply(`oiiieeee :3 (oi cringe)`);
    }
    else if (msg.content == 'F') {
        msg.channel.send(`F`);
    }
    else if (msg.content == 'Mulher' || msg.content == 'mulher') {
        msg.reply(`Você quis dizer Bosta?`);
    }
    else if (msg.content == 'Judeu' || msg.content == 'judeu') {
        msg.reply(`Você quis dizer Morto?`);
    } 
    else if (msg.content == 'Negros' || msg.content == 'negros' || msg.content == 'Negro' || msg.content == 'negro') {
        msg.reply(`Você quis dizer macacos?`);
    } 
    else if (msg.content == 'nazismo') {
        msg.channel.send(`:heart:                    :heart::heart::heart::heart::heart::heart:
:heart:                    :heart:
:heart:                    :heart:
:heart:                    :heart:
:heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:
                         :heart:                        :heart:
                         :heart:                        :heart:
                         :heart:                        :heart:
:heart::heart::heart::heart::heart:                         :heart:
`);
  } }
})




function verificarPermissao(member,command){
    let verification = !permissions[command];
    if(!verification){
        const perms = permissions[command];
        perms.forEach(p =>
        {
            switch(p.type)
            {
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