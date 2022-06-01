const request = require("request");
const {
    MessageAttachment
} = require("discord.js");
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.SERP_TOKEN);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function image(message, search) {
    const params = {
        engine: "google",
        q: search,
        location: "Austin, Texas, United States",
        google_domain: "google.com",
        gl: "us",
        hl: "en",
        device: "desktop",
        num: "10",
        tbm: "isch"
    };

    const sendmsg = function(data) {
        console.log(data);
        var urls = data.images_results
        var url = urls[getRndInteger(0, urls.length)].original;
        return message.channel.send(url);
    };
    search.json(params, sendmsg);
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




    } else if (args[0] == "female") {
        try {
            const options = {
                method: "GET",
                url: "https://api.generated.photos/api/v1/faces?per_page=1&gender=female&order_by=random&api_key=Yh_pBa9PvRluKewjJk68iA"
            };

            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    const image = JSON.parse(body);

                    const imgurl = new MessageAttachment(image.faces[0].urls[4]["512"]);
                    return message.channel.send(imgurl);
                }
            });
        } catch (error) {
            console.log(error);
            return message.channel.send("Somethin Went wrong");
        }





    } else if (args[0] == "male") {
        try {
            const options = {
                method: "GET",
                url: "https://api.generated.photos/api/v1/faces?per_page=1&gender=male&order_by=random&api_key=Yh_pBa9PvRluKewjJk68iA"
            };

            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    const image = JSON.parse(body);

                    const imgurl = new MessageAttachment(image.faces[0].urls[4]["512"]);
                    return message.channel.send(imgurl);
                }
            });
        } catch (error) {
            console.log(error);
            return message.channel.send("Somethin Went wrong");
        }




    } else {
        var term = args.join(" ");
        image(message, term);
    }

}

module.exports.help = {
    name: "image",
    aliases: ["img"]
}