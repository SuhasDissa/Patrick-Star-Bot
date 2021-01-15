const request = require("request");
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

module.exports.run = async (bot, msg, args) => {

    try {
        request("https://www.reddit.com/u/kerdaloo/m/dankmemer/top/.json?sort=top&t=week&limit=500", function(
          error,
          response,
          body
        ) {
          if (!error && response.statusCode == 200) {
            const comic= JSON.parse(body);
            var i = getRndInteger(0,comic.data.children.length);
            return msg.channel.send(comic.data.children[i].data.url);
          }
        });
      } catch (error) {
        console.log(error);
      }

}

module.exports.help = {
    name: "meme",
    aliases: ["memes"]
} 