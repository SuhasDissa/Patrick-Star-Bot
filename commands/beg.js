const fs = require("fs");
const money = require("../money.json");
const values = require("../variables.js");
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
          
          
      if (!money[user.id]) {
        money[user.id] = {
          name: bot.users.cache.get(user.id).tag,
          money: coins
        };
        fs.writeFile("./money.json", JSON.stringify(money), error => {
          if (error) console.log(error);
        });
      }else{
        money[user.id].money += coins;
        
        fs.writeFile("./money.json", JSON.stringify(money), (error) =>{
            if(error) console.log(error);
            });
    }
    return message.reply(values.name[randname] + " gave you " + coins + " coins.");

          break;

        case 2:
          return message.reply(values.name[randname] + ": I dont have coins for you!");
          break;

        case 3:
          return message.reply(values.name[randname] + ": aww get away!");
          break;

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
          break;
      }

};

module.exports.help = {
  name: "beg",
  aliases: ["begmoney"]
};
