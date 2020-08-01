const values = require("../variables.js");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
module.exports.run = async (bot, msg, args) => {

    var y = getRndInteger(0, values.memes.length);
     return msg.channel.send(values.memes[y]);

}

module.exports.help = {
    name: "meme",
    aliases: ["memes"]
} 