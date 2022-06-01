module.exports.run = async (bot, message, args) => {

    return message.channel.send("What should i do ?");

}

module.exports.help = {
    name: "do",
    aliases: ["dosomething"]
}