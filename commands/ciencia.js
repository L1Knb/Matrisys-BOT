const foto     = require("../fotos.json")

module.exports = async (client,msg) =>
{
  msg.channel.send(foto.ciencia);
}
