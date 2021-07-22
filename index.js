const express = require('express');
const app = express();
app.get("/", (request, response) => 
{
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

const Discord       = require ('discord.js');

const client        = new Discord.Client();

const config        = require("./config.json");
const commands      = require("./scripts/CommandsReader")(config.prefix);
const unknowCommand = require("./scripts/unknowCommand");
const welcome       = require("./scripts/welcome");
const interacao     = require("./scripts/interation");

const permissions   = config.permissions;

client.on("ready", () =>
{
  console.log(`Logado com o bot ${client.user.tag}`);
  welcome(client);
  interacao(client);
});

client.on("message", (mensagem) => 
{
  if(!mensagem.author.bot && mensagem.guild){
        if(config.debug) console.log(`${mensagem.author.username}: ${mmensagemsg.content}`);
        const args = mensagem.content.split(" ");
        if(commands[args[0]]){
            if(verificarPermissao(mensagem.member,args[0]))
                commands[args[0]](client,mensagem, args);
            else mensagem.reply("você não tem permissão para executar esse comando!");
        }
        else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);
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

client.login(process.env.TOKEN);