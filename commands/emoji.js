const request = require("request");

var namelist = [];
var urllist = [];

function fillArray(comic) {
    namelist.push(comic.title);
    urllist.push(comic.image);
}
module.exports.run = async (bot, message, args) => {

    if (args.length < 1) {
        return message.channel.send(
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
                    var listedmessage = '';
                    for (i = 0; i < namelist.length; i++) {
                        txtValue = namelist[i];
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            listedmessage = listedmessage + namelist[i] + ": \n" + urllist[i] + "\n"
                            
                        }
                    }
                    return message.channel.send(listedmessage);
                }
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            var listedmessage = '';
            for (i = 0; i < namelist.length; i++) {
                txtValue = namelist[i];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    listedmessage = listedmessage + namelist[i] + ": \n" + urllist[i] + "\n"
                }
            }
            return message.channel.send(listedmessage);
        } catch (error) {

        }
    }
}

module.exports.help = {
    name: "emoji",
    aliases: ["sticker"]
}