const request = require("request");
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

memelist = [];

module.exports.run = async (bot, msg, args) => {


  if (!memelist.length) {
    try {
      request("https://www.reddit.com/r/memes/top/.json?sort=top&t=week&limit=500", function (
        error,
        response,
        body
      ) {
        if (!error && response.statusCode == 200) {
          const comic = JSON.parse(body);
          var i = getRndInteger(0, comic.data.children.length);
          for (x = 0; x < comic.data.children.length; x++) {
            memelist[x] = comic.data.children[x].data.url
          }
          return msg.channel.send(comic.data.children[i].data.url);
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    var x = getRndInteger(0, memelist.length);
    return msg.channel.send(memelist[x]);
  }


  /* try {
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
     }*/

}

module.exports.help = {
  name: "meme",
  aliases: ["memes"]
}