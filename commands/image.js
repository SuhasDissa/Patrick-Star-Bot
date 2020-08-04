const request = require("request");
const {MessageAttachment} = require("discord.js");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.run = async (bot, msg, args) => {


    if (args[0] == "geeth") {
        const geeth = new MessageAttachment(
            "https://s7.gifyu.com/images/geeth.jpg"
        );
        return msg.channel.send(geeth);




    } else if (args[0] == "sithum") {
        const sithum = new MessageAttachment(
            "https://s7.gifyu.com/images/sithum.jpg"
        );
        return msg.channel.send(sithum);






    } else if (args[0] == "random") {
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
        msg.channel.send(
            "I Couldn't find a matching image. So I'll send you this"
        );
        const avatar = new MessageAttachment(msg.author.displayAvatarURL());
        return msg.channel.send(avatar);
    }

}

module.exports.help = {
    name: "image",
    aliases: ["img"]
} 