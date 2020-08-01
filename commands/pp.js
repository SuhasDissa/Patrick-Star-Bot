const values = require("../variables.js");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
module.exports.run = async (bot, msg, args) => {

    if (1 < args.length) {
        var p = getRndInteger(0, values.pp.length);
       return msg.channel.send(args[1] + "'s pee pee size:\n" + values.pp[p]);
      } else {
        var p = getRndInteger(0, values.pp.length);
       return msg.channel.send(message.mentions.users.first() + "'s pee pee size:\n" + values.pp[p]);
      }
}

module.exports.help = {
    name: "pp",
    aliases: ["penis"]
} 