const request = require("request");
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
comiclist = [];
module.exports.run = async (bot, message, args) => {


  if (!comiclist.length) {
    try {
      request("https://www.reddit.com/r/comics/top/.json?sort=top&t=week&limit=500", function (
        error,
        response,
        body
      ) {
        if (!error && response.statusCode == 200) {
          const comic = JSON.parse(body);
          var i = getRndInteger(0, comic.data.children.length);
          for (x = 0; x < comic.data.children.length; x++) {
            comiclist[x] = comic.data.children[x].data.url
          }
          return message.channel.send(comic.data.children[i].data.url);
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    var x = getRndInteger(0, comiclist.length);
    return message.channel.send(comiclist[x]);
  }

  /*
      try {
          request("https://www.reddit.com/r/comics/top/.json?sort=top&t=week&limit=500", function(
            error,
            response,
            body
          ) {
            if (!error && response.statusCode == 200) {
              const comic= JSON.parse(body);
              var i = getRndInteger(0,comic.data.children.length);
              return message.channel.send(comic.data.children[i].data.url);
            }
          });
        } catch (error) {
          console.log(error);
        }*/

}

module.exports.help = {
  name: "comic",
  aliases: ["cartoon"]
}