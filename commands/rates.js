const request = require("request");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const urlcurrency =
        "https://currencyapi.net/api/v1/rates?key=Yfs40piZmxakJzJ0zrSspOSSEJjij4r89HGZ&limit=LKR";

    request(urlcurrency, function (err, response, body) {
        let currency = JSON.parse(body);

        const RatesEmbed = new MessageEmbed()
            .setColor("#ff7936")
            .setTitle("Currency Updates")
            .setDescription(`1 USD = ${currency.rates.LKR} LKR`);
        return message.channel.send(RatesEmbed);
    });

}

module.exports.help = {
    name: "exchangerates",
    aliases: ["rates", "currencyrates"]
} 