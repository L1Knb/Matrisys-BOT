const servidores = 
{
  'server': 
  {
    connection: null,
    dispatcher: null
  } 
}

module.exports = async (client,msg) => 
{
  servidores.server.connection = await msg.member.voice.channel.join();



}