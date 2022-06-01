const request = require("request");

module.exports.run = async (bot, message, args) => {

    try {
        request("https://sv443.net/jokeapi/v2/joke/Any?type=single", function(
            error,
            response,
            bodyjoke
        ) {
            if (!error && response.statusCode == 200) {
                const randjoke = JSON.parse(bodyjoke);
                return message.channel.send(randjoke.joke);
            }
        });
    } catch (error) {
        console.log(error);
    }

}

module.exports.help = {
    name: "joke",
    aliases: ["jokes"]
}