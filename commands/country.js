const request = require("request");
const {
    MessageEmbed
} = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send("Please tell me a country code");
    var url = "https://restcountries.eu/rest/v2/name/" + args.join("%20");


    request(url, function(err, response, body) {
        let data = JSON.parse(body);

        if (!data[0]) return message.channel.send("Error");

        const Embed = new MessageEmbed()
            .setColor("#ff7936")
            .setTitle(data[0].name)
            .setImage(data[0].flag)
            .addFields({
                name: "Country code",
                value: `${data[0].alpha2Code}`
            }, {
                name: "Capital",
                value: `${data[0].capital}`
            }, {
                name: "Region",
                value: `${data[0].region}`
            }, {
                name: "Population",
                value: `${data[0].population}`
            }, {
                name: "Area",
                value: `${data[0].area} Sq km`
            }, {
                name: "Timezone",
                value: `${data[0].timezones[0]}`
            }, {
                name: "Currency",
                value: `${data[0].currencies[0].name}`
            }, {
                name: "Currency Code",
                value: `${data[0].currencies[0].code}`
            }, {
                name: "IDD Code",
                value: `+${data[0].callingCodes[0]}`
            }, );
        return message.channel.send(Embed);
    });
};

module.exports.help = {
    name: "country",
    aliases: []
};