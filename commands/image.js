const request = require("request");
const cheerio = require("cheerio");
const { MessageAttachment } = require("discord.js");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function image(message, search) {

    const options = {
        url: "https://yandex.com/images/search?text=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);

        const links = $("a.serp-item__link img.serp-item__thumb");

        const urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("src"));
        if (!urls.length) {
            return;
        }

        return message.channel.send("http:"+urls[getRndInteger(0, urls.length)]);
    });

}

module.exports.run = async (bot, msg, args) => {

    if (args.length < 1) {
        return msg.channel.send(
            "Tell me a keyword you nigge"
        );
    }

    if (args[0] == "random") {
        var randht = getRndInteger(100, 800);
        var randwdth = getRndInteger(100, 800);
        var link = "https://picsum.photos/" + randht + "/" + randwdth;
        return msg.channel.send(link);





    } else if (args[0] == "cat") {
        var randht = getRndInteger(100, 800);
        var randwdth = getRndInteger(100, 800);
        var link = "http://placekitten.com/" + randht + "/" + randwdth;
        return msg.channel.send(link);




    } else if (args[0] == "female") {
        try {
            const options = {
                method: "GET",
                url:
                    "https://api.generated.photos/api/v1/faces?per_page=1&gender=female&order_by=random&api_key=Yh_pBa9PvRluKewjJk68iA"
            };

            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    const image = JSON.parse(body);

                    const imgurl = new MessageAttachment(image.faces[0].urls[4]["512"]);
                    // console.log(body);
                    return msg.channel.send(imgurl);
                    //msg.channel.send();
                }
            });
        } catch (error) {
            console.log(error);
        }





    } else if (args[0] == "male") {
        try {
            const options = {
                method: "GET",
                url:
                    "https://api.generated.photos/api/v1/faces?per_page=1&gender=male&order_by=random&api_key=Yh_pBa9PvRluKewjJk68iA"
            };

            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    const image = JSON.parse(body);

                    const imgurl = new MessageAttachment(image.faces[0].urls[4]["512"]);
                    // console.log(body);
                    return msg.channel.send(imgurl);
                    //msg.channel.send();
                }
            });
        } catch (error) {
            console.log(error);
        }




    } else {
       // return msg.channel.send("this comand is disabled");
        
        var term= args.join("+");
        
        image(msg,term);
    }

}

module.exports.help = {
    name: "image",
    aliases: ["img"]
}