const request = require("request");
const {
    MessageEmbed
} = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const urlfact = "https://uselessfacts.jsph.pl/random.json?language=en";

    request(urlfact, function(err, response, body) {
        let fact = JSON.parse(body);

        const factEmbed = new MessageEmbed()
            .setColor("#ff7936")
            .setTitle("Useless Fact")
            .setDescription(fact.text);
        return message.channel.send(factEmbed);
    });


}

module.exports.help = {
    name: "fact",
    aliases: ["uselessfact"]
}