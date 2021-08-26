const token = process.env.TOKEN;

const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const bot = new Client();

const request = require("request");
const values = require("./variables.js");
const cheerio = require("cheerio");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const prefix = ".";

const fs = require("fs");

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
      console.log("no command files!");
      return;
  }

  jsfile.forEach((f) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded`);
      bot.commands.set(props.help.name , props);

      props.help.aliases.forEach(alias => {
          bot.aliases.set(alias, props.help.name);
      })
  })
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

bot.on("ready", () => {
  console.log(`this bot is online on ${bot.guilds.cache.size} server(s).`);
});

bot.on("message", async message =>{
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let command;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if (commandfile) commandfile.run(bot, message, args);

  if(bot.commands.has(cmd)){
      command = bot.commands.get(cmd);
  }else if (bot.aliases.has(cmd)){
      command = bot.commands.get(bot.aliases.get(cmd));
  }

  try {
      command.run(bot, message, args);
  }catch(e){
      return;
  }
})

bot.login(token);
