const request = require("request");

var namelist = [];
var urllist = [];

function fillArray(comic) {
    namelist.push(comic.title);
    urllist.push(comic.image);
}
module.exports.run = async (bot, msg, args) => {

    if (args.length < 1) {
        return msg.channel.send(
            "Tell me a keyword you nigge"
        );
    }
    var filter = args[0].toUpperCase();

    if (!namelist.length) {
        try {
            request("http://emoji.gg/api/", function (
                error,
                response,
                body
            ) {
                if (!error && response.statusCode == 200) {

                    const comic = JSON.parse(body);

                    comic.forEach(fillArray);

                    for (i = 0; i < namelist.length; i++) {
                        txtValue = namelist[i];
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {

                            return msg.channel.send(namelist[i] + ": /n" + urllist[i]);
                        }
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            for (i = 0; i < namelist.length; i++) {
                txtValue = namelist[i];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    return msg.channel.send(namelist[i] + ": /n" + urllist[i]);
                }
            }
        } catch (error) {

        }
    }
}

module.exports.help = {
    name: "emoji",
    aliases: ["sticker"]
}