const token = process.env.token;

const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const bot = new Client();

const request = require("request");
const values = require("./variables.js");

const express = require('express');
const app = express();

// The public folder will have all the styles and scripts 
//app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const prefix = ".";
var fs = require("fs");

var money_alchemist = 0;
var money_nerdcat = 0;

fs.readFile("alchemist.txt", function(err, data) {
  if (err) {
    return console.error(err);
  }
  money_alchemist = parseInt(data);
});
fs.readFile("nerdcat.txt", function(err, data) {
  if (err) {
    return console.error(err);
  }
  money_nerdcat = parseInt(data);
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

bot.on("ready", () => {
  console.log("this bot is online!");
});

bot.on("message", msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  let command = msg.content.substring(prefix.length).split(" ");

  switch (command[0]) {
    case "hi":
      msg.reply("Hi Bro");
      break;
    case "future":
      var i = getRndInteger(0, values.future.length);
      msg.channel.send(values.future[i]);
      break;
    case "emoji":
      var x = getRndInteger(0, values.emoji.length);
      msg.channel.send(values.emoji[x]);
      break;
    case "riddle":
      var y = getRndInteger(0, values.riddle.length);
      msg.channel.send(values.riddle[y]);
      break;
    case "pp":
      if (1 < command.length) {
        var p = getRndInteger(0, values.pp.length);
        msg.channel.send(command[1] + "'s pee pee size:\n" + values.pp[p]);
      } else {
        var p = getRndInteger(0, values.pp.length);
        msg.reply("'s pee pee size:\n" + values.pp[p]);
      }
      break;
    case "do":
      msg.channel.send("What should I do");
      break;
    case "help":
      const helpEmbed = new MessageEmbed()
        .setColor("#ff7936")
        .setTitle("HELP")
        .addFields(
          { name: "General Commands", value: "hi, emoji" },
          { name: "Useful commands", value: "corona, exchangerates, fact" },
          {
            name: "Image commands",
            value: "image <name>, image random, image cat, image male/female"
          },
          { name: "Fun commands", value: "riddle, meme, joke, future" },
          { name: "Currency commands", value: "beg, bal" },
          { name: "Other commands", value: "fuck, yousuck, shit, do" }
        );
      msg.channel.send(helpEmbed);
      break;
    case "image":
      if (command[1] == "geeth") {
        const geeth = new MessageAttachment(
          "https://s7.gifyu.com/images/geeth.jpg"
        );
        msg.channel.send(geeth);
      } else if (command[1] == "sithum") {
        const sithum = new MessageAttachment(
          "https://s7.gifyu.com/images/sithum.jpg"
        );
        msg.channel.send(sithum);
      } else if (command[1] == "random") {
        var randht = getRndInteger(100, 800);
        var randwdth = getRndInteger(100, 800);
        var link = "https://picsum.photos/" + randht + "/" + randwdth;
        msg.channel.send(link);
      } else if (command[1] == "cat") {
        var randht = getRndInteger(100, 800);
        var randwdth = getRndInteger(100, 800);
        var link = "http://placekitten.com/" + randht + "/" + randwdth;
        msg.channel.send(link);
      } else if (command[1] == "female") {
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
              msg.channel.send(imgurl);
              //msg.channel.send();
            }
          });
        } catch (error) {
          console.log(error);
        }
      }else if (command[1] == "male") {
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
              msg.channel.send(imgurl);
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
        msg.channel.send(avatar);
      }
      break;
    case "shit":
      msg.channel.send("Shit what?");
      break;
    case "yousuck":
      msg.react("🖕");
      break;
    case "fuck":
      msg.channel.send("Go fuck yourself!");
      break;
    case "meme":
      try {
        const options = {
          method: "GET",
          url: "http://alpha-meme-maker.herokuapp.com/0"
        };

        request(options, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            const meme = JSON.parse(body);
            const random = getRndInteger(0, meme.data.length);

            const memeImg = new MessageAttachment(meme.data[random].image);
            msg.channel.send(memeImg);
            //msg.channel.send();
          }
        });
      } catch (error) {
        console.log(error);
      }
      break;

    case "corona":
      const url = "https://corona.lmao.ninja/v3/covid-19/all";
      const localurl = "https://hpb.health.gov.lk/api/get-current-statistical";

      request(url, function(err, response, body) {
        let covid = JSON.parse(body);

        const coronaEmbedWorld = new MessageEmbed()
          .setColor("#ff7936")
          .setTitle("COVID-19 CASES WORLD")
          .addFields(
            { name: "☣️ Total cases", value: `${covid.cases}` },
            { name: "🔴 Active cases", value: `${covid.active}` },
            { name: "♻️ Recovered", value: `${covid.recovered}` },
            { name: "⚰️ Dead", value: `${covid.deaths}` }
          );
        msg.channel.send(coronaEmbedWorld);
      });

      request(localurl, function(error, responselk, bodylk) {
        let covidlk = JSON.parse(bodylk);

        const coronaEmbedLk = new MessageEmbed()
          .setColor("#ff7936")
          .setTitle("COVID-19 CASES SRI-LANKA")
          .addFields(
            {
              name: "☣️ Total cases",
              value: `${covidlk.data.local_total_cases}`
            },
            {
              name: "🔴 Active cases",
              value: `${covidlk.data.local_active_cases}`
            },
            { name: "♻️ Recovered", value: `${covidlk.data.local_recovered}` },
            { name: "⚰️ Dead", value: `${covidlk.data.local_deaths}` },
            { name: "➕ New Cases", value: `${covidlk.data.local_new_cases}` }
          );
        msg.channel.send(coronaEmbedLk);
      });
      break;
    case "joke":
      try {
        request("https://sv443.net/jokeapi/v2/joke/Any?type=single", function(
          error,
          response,
          bodyjoke
        ) {
          if (!error && response.statusCode == 200) {
            const randjoke = JSON.parse(bodyjoke);
            //   const random = Math.floor(Math.random() * Math.floor(100));

            msg.channel.send(randjoke.joke);
            //msg.channel.send();
          }
        });
      } catch (error) {
        console.log(error);
      }
      break;
    case "exchangerates":
      const urlcurrency =
        "https://currencyapi.net/api/v1/rates?key=Yfs40piZmxakJzJ0zrSspOSSEJjij4r89HGZ&limit=LKR";

      request(urlcurrency, function(err, response, body) {
        let currency = JSON.parse(body);

        const RatesEmbed = new MessageEmbed()
          .setColor("#ff7936")
          .setTitle("Currency Updates")
          .setDescription(`1 USD = ${currency.rates.LKR} LKR`);
        msg.channel.send(RatesEmbed);
      });

      break;
    case "fact":
      const urlfact = "https://uselessfacts.jsph.pl/random.json?language=en";

      request(urlfact, function(err, response, body) {
        let fact = JSON.parse(body);

        const factEmbed = new MessageEmbed()
          .setColor("#ff7936")
          .setTitle("Useless Fact")
          .setDescription(fact.text);
        msg.channel.send(factEmbed);
      });

      break;
    case "beg":
      var randname = getRndInteger(0, values.name.length);
      var option = getRndInteger(1, 4);

      switch (option) {
        case 1:
          var randcoins = getRndInteger(2, 1000);
          var coins = randcoins;
          msg.reply(values.name[randname] + " gave you " + coins + " coins.");
          if (msg.author.tag == "Full Toxic Alchemist#5932") {
            money_alchemist = money_alchemist + coins;
            fs.writeFile("alchemist.txt", money_alchemist, function(err) {
              if (err) {
                return console.error(err);
              }
            });
          } else if (msg.author.tag == "NerdCatPro#6983") {
            money_nerdcat = money_nerdcat + coins;
            fs.writeFile("nerdcat.txt", money_nerdcat, function(err) {
              if (err) {
                return console.error(err);
              }
            });
          }
          break;

        case 2:
          msg.reply(values.name[randname] + ": I dont have coins for you!");
          break;

        case 3:
          msg.reply(values.name[randname] + ": aww get away!");
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
          msg.reply(
            values.name[randname] + ": I need to buy " + item[randitem]
          );
          break;
      }
      break;
    case "bal":
      if (msg.author.tag == "Full Toxic Alchemist#5932") {
        var money = money_alchemist;
      } else if (msg.author.tag == "NerdCatPro#6983") {
        var money = money_nerdcat;
      }
      const Wallet = new MessageEmbed()
        .setColor("#ff7936")
        .setTitle(`${msg.author.tag} s Wallet`)
        .setDescription(`Coins = ${money}`);
      msg.channel.send(Wallet);
      break;
  }
});

bot.login(token);
