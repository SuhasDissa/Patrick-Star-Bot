const {MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const helpEmbed = new MessageEmbed()
    .setColor("#ff7936")
    .setTitle("HELP")
    .addFields(
      { name: "General Commands", value: "hi, emoji" },
      { name: "Useful commands", value: "corona, exchangerates, fact" },
      {
        name: "Image commands",
        value: "image <name>, image random, image cat, image male/female"
      },
      { name: "Fun commands", value: "riddle, meme, joke, future" },
      { name: "Currency commands", value: "beg, bal" },
      { name: "Other commands", value: "fuck, yousuck, shit, do" }
    );
  return message.channel.send(helpEmbed);

}

module.exports.help = {
    name: "help",
    aliases: ["info"]
} 