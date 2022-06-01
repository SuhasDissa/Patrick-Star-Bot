const request = require("request");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send("Give me a link nigge");
    var url = args[0];

    try {
        request({
                uri: url,
                followRedirect: false,
            },
            function(err, httpResponse) {
                if (err) {
                    console.error(err)
                    return message.channel.send("Shit aint workin");
                }
                return message.channel.send(httpResponse.headers.location || uri);
            }
        );
    } catch (error) {
        console.log(error);
    }

}

module.exports.help = {
    name: "sus",
    aliases: ["unshort"]
}