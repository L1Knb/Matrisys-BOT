const config   = require("../config.json");


module.exports = async (client) =>
{

  /*let bio = [

    `Acesse https://github.com/Matrisys-Foundation e https://www.linkedin.com/company/matrisysfoundation`

  ]
  client.user.setStatus(bio);*/

  let atividade =
  [
    `Use ${config.prefix}help para ajuda com comandos`,
    `Matrisys Fundation made by John and L1`
  ],
  i = 0;
  setInterval ( () =>
    client.user.setActivity(`${atividade[i++ % atividade.length]}`,{
      type: "WATCHING"
  }), 500 * 100);
}