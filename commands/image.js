const request = require("request");
const {
    MessageAttachment
} = require("discord.js");
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.SERP_TOKEN);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
module.exports.run = async (bot, message, args) => {

    if (args.length < 1) {
        return message.channel.send(
            "Tell me a keyword you nigge"
        );
    }

    if (args[0] == "random") {
        var randht = getRndInteger(100, 800);
        var randwdth = getRndInteger(100, 800);
        var link = "https://picsum.photos/" + randht + "/" + randwdth;
        return message.channel.send(link);

    } else if (args[0] == "cat") {
        var randht = getRndInteger(100, 800);
        var randwdth = getRndInteger(100, 800);
        var link = "http://placekitten.com/" + randht + "/" + randwdth;
        return message.channel.send(link);

    } else {
        var term = args.join(" ");
        const params = {
        engine: "google",
        q: term,
        location: "Austin, Texas, United States",
        google_domain: "google.com",
        gl: "us",
        hl: "en",
        device: "desktop",
        num: "10",
        tbm: "isch"
    };
    const sendmsg = function(data) {
        var urls = data.images_results
        var url = urls[getRndInteger(0, urls.length)].original;
        return message.channel.send(url);
    };
    search.json(params, sendmsg);
    }

}

module.exports.help = {
    name: "image",
    aliases: ["img"]
}
