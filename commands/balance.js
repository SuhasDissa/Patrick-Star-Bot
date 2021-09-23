const fs = require("fs");
const money = require("../money.json");
//const request = require("request");
//var money = '';

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    var user = message.author;
  } else {
    var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
  }
  /*try {
    request("https://patrick-brain.herokuapp.com/money", function (
      error,
      response,
      body
    ) {
      if (!error && response.statusCode == 200) {

        money = JSON.parse(body);
      }
    });
  } catch (error) {
    console.log(error);
    return
  }*/

  if (!money[user.id]) {
     money[user.id] = {
       name: bot.users.cache.get(user.id).tag,
       money: 0
     };
     fs.writeFile("./money.json", JSON.stringify(money), error => {
       if (error) console.log(error);
     });

   /* post_url = "https://patrick-brain.herokuapp.com/save-money?userid=" + bot.users.cache.get(user.id) + "&amount=0"

    request.post(post_url,
      function (error, response, body) {
        console.log(body);
      });
*/
      return message.channel.send(
        `${bot.users.cache.get(user.id).username} has 0 coins.`
      );

  }

  return message.channel.send(
    `${bot.users.cache.get(user.id).username} has ${money[user.id].money} coins.`
  );
};

module.exports.help = {
  name: "balance",
  aliases: ["bal", "money"]
};
