const values = require("../variables.js");


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.run = async (bot, message, args) => {

    var i = getRndInteger(0, values.future.length);
    return message.channel.send(values.future[i]);

}

module.exports.help = {
    name: "future",
    aliases: ["predict"]
}