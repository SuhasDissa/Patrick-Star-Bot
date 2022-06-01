module.exports.run = async (bot, message, args) => {

    const amount = args[0];

    if (!amount) return message.reply('Deleted nothing cos you didnt ask me to');
    if (isNaN(amount)) return message.reply('Stop fucking around');

    if (amount > 100) return message.reply('You can\'t delete more than 100 messages at once! (tbh Discord doesen\'t let me)');
    if (amount < 1) return message.reply('Are you nuts?');

    await message.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        message.channel.bulkDelete(messages)
    });
}

module.exports.help = {
    name: "clear",
    aliases: ["deletemessage", "purge"]
}