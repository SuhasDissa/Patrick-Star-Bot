
const values = require("../variables.js");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
module.exports.run = async (bot, msg, args) => {

    var i = getRndInteger(0, values.riddle.length);
    return msg.channel.send(values.riddle[i]);

}

module.exports.help = {
    name: "riddle",
    aliases: ["puzzle"]
} 