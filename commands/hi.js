module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hi bro!");

}

module.exports.help = {
    name: "hi",
    aliases: ["ping", "test"]
} 