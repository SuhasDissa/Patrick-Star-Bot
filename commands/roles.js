module.exports.run = async (bot, message, args) => {

    message.guild.roles.cache.find(role => role.id === '721309193344122940').delete();

    return message.channel.send("What should i do ?");

}

module.exports.help = {
    name: "role",
    aliases: []
} 