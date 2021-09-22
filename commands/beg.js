const fs = require("fs");
//const money = require("../money.json");
const values = require("../variables.js");
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const money;
module.exports.run = async (bot, message, args) => {


  var randname = getRndInteger(0, values.name.length);
  var option = getRndInteger(1, 4);

  if (!args[0]) {
    var user = message.author;
  } else {
    var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
  }


  switch (option) {
    case 1:
      var randcoins = getRndInteger(2, 1000);
      var coins = randcoins;

      try {
        request("https://patrick-brain.glitch.me/money", function (
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
      }

      if (money[user.id]) {
        coins = money[user.id].money + coins;
      }
      post_url = "https://patrick-brain.glitch.me/save-money?user=" + bot.users.cache.get(user.id).tag + "&amount=" + coins
      /*money[user.id] = {
        name: bot.users.cache.get(user.id).tag,
        money: coins
      };*/
      /*fs.writeFile("./money.json", JSON.stringify(money), error => {
        if (error) console.log(error);
      });*/

      request.post(post_url,
        function (error, response, body) {
          console.log(body);
        });

      return message.reply(values.name[randname] + " gave you " + coins + " coins.");


    case 2:
      return message.reply(values.name[randname] + ": I dont have coins for you!");

    case 3:
      return message.reply(values.name[randname] + ": aww get away!");

    case 4:
      const item = [
        "a car",
        "an Iphone",
        "Air pods",
        "a Tractor",
        "a cow",
        "a Gift for my ex",
        "a computer",
        "an Apple Watch",
        "a Bike"
      ];
      var randitem = getRndInteger(0, item.length);
      return message.reply(
        values.name[randname] + ": I need to buy " + item[randitem]
      );
  }

};

module.exports.help = {
  name: "beg",
  aliases: ["begmoney"]
};
